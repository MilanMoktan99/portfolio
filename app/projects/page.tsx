import { projectData, assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { DarkModeProps } from "../types";

export default function Projects({ isDarkMode }: DarkModeProps) {
  return (
    <div>
      <div className="mt-12 px-6 sm:px-[12%]">
        <div className="flex gap-2 text-sm">
          <Link href="/" className="hover:underline hover:text-gray-500">
            Home
          </Link>
          {"/"}
          <Link
            href="/projects"
            className="font-medium text-red-500 underline hover:text-red-400"
          >
            Projects
          </Link>
        </div>
        <h1 className="my-6 text-2xl font-medium">All Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project) => {
            const shortDesc =
              project.description.length > 100
                ? project.description.slice(0, 100)
                : project.description;

            return (
              <div
                key={project.id}
                className={`border rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer 
                  `}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.bgImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="text-sm text-gray-400">
                    {shortDesc}
                    {project.description.length > 100 && (
                      <span className="text-blue-500 cursor-pointer ml-1">
                        Read more
                      </span>
                    )}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <button
                      className={`px-6 py-2 text-sm rounded-sm transition border ${
                        isDarkMode
                          ? "border-white hover:bg-black"
                          : "bg-black/80 hover:bg-black text-white"
                      }`}
                    >
                      <a
                        href={project.link}
                        target="blank"
                        className="flex gap-2 items-center"
                      >
                        Live Demo{" "}
                        <Image
                          src={assets.link}
                          alt="link-icon"
                          className="w-4"
                        />
                      </a>
                    </button>
                    <Link
                      href={`/projects/${project.id}`}
                      className={`px-6 py-2 text-sm border rounded-sm border-gray-800 text-center ${
                        isDarkMode
                          ? "bg-white text-black"
                          : "bg-white hover:bg-white/80 text-black"
                      }`}
                    >
                      Project Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="mt-26 mx-[10%] border-t border-gray-400">
        <p className="text-center py-3">
          Ⓒ 2025 Milan Moktan, All rights reserved.
        </p>
      </footer>
    </div>
  );
}
