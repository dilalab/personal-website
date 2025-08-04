import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = {} as Record<string, number>;


const excludedSlugs = ["africa-gif", "relief-map"];

const featuredProjects = allProjects
  .filter((p) => p.published && !excludedSlugs.includes(p.slug))
  .sort(
    (a, b) =>
      new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
      new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
  );

const excludedProjects = allProjects.filter(
  (p) => excludedSlugs.includes(p.slug) && p.published,
);


return (
  <div className="relative pb-16">
    <Navigation />
    <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      
      {/* Header */}
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 text-zinc-400">
          Some of the projects I worked on during my studies and professional life
        </p>
      </div>

      <div className="w-full h-px bg-zinc-800" />

      {/* Featured Projects */}
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <Card key={project.slug}>
            <Article project={project} />
          </Card>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-zinc-800 my-12" />

      {/* Other Projects */}
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h3 className="text-2xl font-semibold text-zinc-100 sm:text-3xl mb-4">
          More Projects
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {excludedProjects.map((project) => (
          <Card key={project.slug}>
            <Article project={project} />
          </Card>
        ))}
      </div>
    </div>
  </div>
);
};
