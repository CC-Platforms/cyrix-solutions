import { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import ProjectListItem from "@/components/projects/project-list-item";
import ContactSection from "@/components/projects/contact-section";
import { Project } from "@/types/project";
import SectionContainer from "@/components/layout/section-container";

async function getProjects() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/projects.json")
  );
  return JSON.parse(data.toString());
}

export const metadata: Metadata = {
  title: "Projects",
  description:
    "With Neofolio, a dashboard-style portfolio website template built with Next.js and Shadcn/ui, you can present yourself online in an ideal way.",
};

export default async function Page() {
  const projects = await getProjects();

  return (
    <>
      <SectionContainer className="mt-10">
        <header className="pb-6 space-y-4">
          <h1 className="text-3xl lg:text-4xl font-semibold">Projects</h1>
          <p className="text-lg text-muted-foreground">
            Explore cutting-edge design innovations that transform ideas into
            reality
          </p>
        </header>
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project: Project) => (
            <ProjectListItem project={project} key={project.id} />
          ))}
        </div>

        <div className="w-full mt-10">
          <ContactSection />
        </div>
      </SectionContainer>
    </>
  );
}
