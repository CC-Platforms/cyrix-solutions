import BackButton from "@/components/projects/back-button";
import ContactSection from "@/components/projects/contact-section";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { Project } from "@/types/project";
import Link from "next/link";
import ProjectListItem from "@/components/projects/project-list-item";
import SectionContainer from "@/components/layout/section-container";
import { Separator } from "@/components/ui/separator";

async function getProjects() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/projects.json")
  );
  return JSON.parse(data.toString());
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const projects = await getProjects();
  const project = projects.find((b: Project) => b.slug === slug);

  return {
    title: project.title,
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const projects = await getProjects();
  const project = projects.find((b: Project) => b.slug === params.slug);

  return (
    <SectionContainer className="container mx-auto mt-6 lg:py-16 mb-6">
      <BackButton url="/projects" />

      <section className="space-y-6 mt-10 mb-14 max-w-screen-lg">
        <header className="pb-4 lg:pb-8 space-y-6 lg:space-y-10">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            {project.title}
          </h1>
          <div className="grid lg:grid-cols-3 text-sm space-y-4 lg:space-y-0">
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">Date</span>
              <span>{project.date}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">Service</span>
              <span>{project.services}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">Client</span>
              <span>{project.client}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Button asChild className="w-full lg:w-auto">
              <Link href={project.preview_url} target="_blank">
                Preview <ExternalLinkIcon />
              </Link>
            </Button>
          </div>
        </header>
        <figure>
          <Image
            width={300}
            height={300}
            src={project.cover_image}
            className="w-full aspect-[4/3]"
            alt={project.title}
          />
        </figure>
        <article dangerouslySetInnerHTML={{ __html: project.content }} />
      </section>

      <Separator />

      <section className="space-y-8 mt-14">
        <header>
          <h4 className="text-2xl font-semibold">More projects</h4>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project: Project) => (
            <ProjectListItem project={project} key={project.id} />
          ))}
        </div>

        <div className="flex items-center justify-end">
          <Button variant="outline"  asChild>
            <Link href="/projects">All projects</Link>
          </Button>
        </div>
      </section>

      <div className="mt-10">
        <ContactSection />
      </div>
    </SectionContainer>
  );
}
