"use client";

import Image from "next/image";
import { Navigation } from "../components/nav";

export default function About() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />

      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto mt-20 text-zinc-300">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center font-display text-white mb-6">
          About Me
        </h1>

        {/* Text */}
        <p className="max-w-2xl text-lg text-center text-zinc-400 leading-relaxed mb-12">
          Hi! I am Dilara, a cartographer, urbanist, designer and programmer, who is passionate about producing intuitive products that support spatial decision-making and data storytelling.
        </p>

        {/* Photo Grid */}
        <div>
          <Image
            src="/images/brlinsoguk.jpg"
            alt="Me working on my laptop"
            width={400}
            height={400}
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
        <div className="mt-8">
        {/* Text */}
        <p className="max-w-2xl text-lg text-center text-zinc-400 leading-relaxed mb-12">
          I would love to connect with like-minded people, feel free to reach out if you'd like to collaborate on a project or just say hi!
        </p>
        </div>
      </div>
    </div>
  );
}
