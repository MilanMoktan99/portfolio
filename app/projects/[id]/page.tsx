import { projectData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetails({ params }: PageProps) {
  const { id } = await params; // ✅ IMPORTANT

  const project = projectData.find(
    (p) => p.id === Number(id)
  );

  if (!project) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <Link href="/projects" className="text-blue-500 underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 sm:px-[12%] py-12">
      {/* Breadcrumb */}
      <div className="text-sm mb-8 flex gap-2 flex-wrap">
        <Link href="/" className="hover:underline text-gray-500">
          Home
        </Link>
        <span>/</span>
        <Link href="/projects" className="hover:underline text-gray-500">
          Projects
        </Link>
        <span>/</span>
        <span className="font-medium text-red-500">
          {project.title}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8">
        {project.title}
      </h1>

      {/* Image */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-[800px] h-[220px] sm:h-[350px] md:h-[420px] rounded-xl overflow-hidden">
          <Image
            src={project.bgImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-center sm:text-left">
        {project.description}
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        <a
          href={project.view}
          target="blank"
          className="px-6 py-2 border border-gray-800 text-sm hover:bg-gray-100 transition"
        >
          View Code
        </a>

        <a
          href={project.link}
          target="_blank"
          className="px-6 py-2 bg-black text-white text-sm hover:bg-black/80 transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
