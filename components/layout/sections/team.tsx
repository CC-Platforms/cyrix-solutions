import { teamList } from "@/@data/teams";
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import SectionHeader from "../section-header";
import SectionContainer from "../section-container";
import { Globe, Mail } from "lucide-react";

export function TeamSection() {
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
      case "Website":
        return <Globe />;
      case "Email":
        return <Mail />;
    }
  };

  return (
    <SectionContainer id="team">
      <SectionHeader subTitle="Team" title="The Guys That Make It Happen" />
      <div className="mx-auto my-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {teamList.map(
            (
              { imageUrl, firstName, lastName, positions, socialNetworks },
              index
            ) => (
              <Card
                key={index}
                className="bg-muted flex flex-col h-full overflow-hidden group/hoverimg"
              >
                <CardHeader className="p-0 gap-0">
                  <div className="h-full overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt=""
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                    />
                  </div>
                  <CardTitle className="py-6 pb-4 px-6">
                    {firstName}
                    <span className="text-primary ml-2">{lastName}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6 px-6 flex flex-wrap gap-2">
                  {positions.map((position, index) => (
                    <span
                      key={index}
                      className="inline-block bg-primary/10 text-primary text-md font-medium px-3 py-1 rounded-full"
                    >
                      {position}
                    </span>
                  ))}
                </CardContent>
                <CardFooter className="space-x-4 mt-auto">
                  {socialNetworks.map(({ name, url }, index) => (
                    <Link
                      key={index}
                      href={url}
                      target="_blank"
                      className="hover:opacity-80 transition-all"
                    >
                      {socialIcon(name)}
                    </Link>
                  ))}
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
