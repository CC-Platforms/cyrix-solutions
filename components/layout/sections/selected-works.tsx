import { Project } from "@/types/project";
import ProjectListItem from "../../projects/project-list-item";
import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import SectionContainer from "../section-container";
import SectionHeader from "../section-header";

async function getProjects() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/projects.json")
  );
  return JSON.parse(data.toString());
}

export default async function SelectedProjectsSection() {
  const projects = await getProjects();
  return (
    <SectionContainer id="projects">
      <SectionHeader
        subTitle="Our Portfolio Projects"
        title="Grow Your Business with Cyrix Tech Solutions"
        description=" Explore cutting-edge design innovations that transform ideas into reality."
      />

      <div className="grid lg:grid-cols-2 gap-6">
        {projects.slice(0, 2).map((project: Project) => (
          <ProjectListItem project={project} key={project.id} />
        ))}
      </div>

      <div className="py-8 flex items-center justify-end">
        <Button className="h-auto py-1" variant="link" asChild>
          <Link href="/projects">
            View All <ArrowRightIcon className="size-3" />
          </Link>
        </Button>
      </div>
    </SectionContainer>
  );
}
