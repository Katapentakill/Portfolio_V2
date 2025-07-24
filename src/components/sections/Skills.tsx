"use client";

import { skills } from "@/data/skills";
import { Icon } from "@iconify/react";
import Image from "next/image";

const grouped = skills.reduce((acc, skill) => {
  acc[skill.category] = acc[skill.category] || [];
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skills>);

function Skills() {
  return (
    <section
      id="skills"
      className="relative z-20 min-h-screen px-6 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl bg-black/70 backdrop-blur-md rounded-2xl border border-amber-500/20 shadow-2xl p-10 z-30">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 tracking-wider flicker-terrifying">
            Mis habilidades
          </h2>
        </div>

        {/* Categorías */}
        <div className="space-y-12">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl md:text-2xl text-amber-500 font-semibold mb-6 border-b border-amber-500/30 pb-2 tracking-wide uppercase">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-black/60 rounded-xl shadow-lg hover:scale-105 transition-transform border border-amber-500/20"
                  >
                    {/* Render lógico: Iconify -> Devicon -> Imagen */}
                    {skill.iconifyIcon ? (
                      <Icon
                        icon={skill.iconifyIcon}
                        className="text-5xl mb-3 text-amber-400 drop-shadow-[0_0_10px_#f59e0b]"
                      />
                    ) : skill.deviconIcon ? (
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.deviconIcon}/${skill.deviconIcon}-original.svg`}
                        alt={skill.name}
                        className="w-[60px] h-[60px] mb-3"
                      />
                    ) : skill.image ? (
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        width={60}
                        height={60}
                        className="mb-3 drop-shadow-[0_0_10px_#f59e0b]"
                      />
                    ) : (
                      <div className="w-[60px] h-[60px] mb-3 bg-gray-800 rounded" />
                    )}

                    <span className="text-sm text-gray-200 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;