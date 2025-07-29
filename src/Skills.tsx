import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFigma, FaServer } from "react-icons/fa";
import { LuPalette } from "react-icons/lu";
import { TbApi } from "react-icons/tb";
import {
  SiFlutter, SiDart, SiPostgresql, SiHtml5, SiCss3,
  SiJavascript, SiTypescript, SiReact, SiExpress,
  SiFirebase, SiPhp, SiCplusplus, SiGithub, SiPython
} from "react-icons/si";

type SkillCategory = "Frontend" | "Backend" | "Diğer";

interface Skill {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const skills: Record<SkillCategory, Skill[]> = {
  Frontend: [
    {
      icon: [<SiHtml5 key="html" />, <SiCss3 key="css" />],
      title: "HTML / CSS",
      desc: "Duyarlı ve erişilebilir kullanıcı arayüzleri."
    },
    {
      icon: <SiJavascript />,
      title: "JavaScript",
      desc: "Web uygulamalarında dinamik yapı ve etkileşim."
    },
    {
      icon: <SiTypescript />,
      title: "TypeScript",
      desc: "Statik tip desteği ile frontend mimarisi."
    },
    {
      icon: <SiReact />,
      title: "React / React Native",
      desc: "Web ve mobil bileşen tabanlı geliştirme."
    },
    {
      icon: <SiFlutter />,
      title: "Flutter / Dart",
      desc: "Çapraz platform mobil uygulamalar."
    },
    {
      icon: <FaFigma />,
      title: "Figma",
      desc: "UI/UX prototipleme ve arayüz tasarımı."
    }
  ],
  Backend: [
    {
      icon: <SiExpress />,
      title: "Express.js",
      desc: "API ve middleware tabanlı web sunucu mimarisi."
    },
    {
      icon: <SiFirebase />,
      title: "Firebase",
      desc: "Gerçek zamanlı veri, kimlik doğrulama ve barındırma."
    },
    {
      icon: <SiPostgresql />,
      title: "PostgreSQL",
      desc: "Güçlü ilişkisel veritabanı sistemi."
    },
    {
      icon: <SiPhp />,
      title: "PHP",
      desc: "Web sunucu taraflı programlama ve API geliştirme."
    }
  ],
  Diğer: [
    {
      icon: <SiCplusplus />,
      title: "C / C++",
      desc: "Sistem programlama ve performans odaklı uygulamalar."
    },
    {
      icon: <SiPython />,
      title: "Python",
      desc: "Yapay zeka, veri işleme ve NLP uygulamaları."
    },
    {
      icon: <SiDart />,
      title: "Dart",
      desc: "Flutter için modern mobil programlama dili."
    },
    {
      icon: <TbApi />,
      title: "REST API",
      desc: "Veri paylaşımı için HTTP tabanlı API mimarileri."
    },
    {
      icon: <SiGithub />,
      title: "Git / GitHub",
      desc: "Versiyon kontrol ve açık kaynak geliştirme."
    }
  ]
};

const tabs: { label: SkillCategory; icon: React.ReactNode }[] = [
  { label: "Frontend", icon: <LuPalette /> },
  { label: "Backend", icon: <FaServer /> },
  { label: "Diğer", icon: <TbApi /> }
];

export default function Skills() {
  const [active, setActive] = useState<SkillCategory>("Frontend");

  return (
    <motion.div
      id="skills"
      className="skills-section py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="section-heading block text-center mb-6">
        <span className="gradient text-3xl sm:text-4xl font-bold">Yeteneklerim</span>
      </span>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabs.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`flex items-center gap-2 px-4 py-2 border rounded-full transition ${
              active === label
                ? "bg-pink-600 text-white"
                : "bg-transparent text-white border-gray-600 hover:bg-pink-800"
            }`}
          >
            {icon} {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills[active].map((skill, index) => (
          <div
            key={index}
            className="bg-[#121212] border border-gray-700 rounded-lg p-5 text-left shadow-md"
          >
            <div className="flex items-center gap-3 mb-2">
              {Array.isArray(skill.icon)
                ? skill.icon.map((i, idx) => (
                    <span key={idx} className="text-xl">{i}</span>
                  ))
                : <span className="text-xl">{skill.icon}</span>}
              <h3 className="text-lg font-semibold">{skill.title}</h3>
            </div>
            <p className="text-sm text-gray-300">{skill.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
