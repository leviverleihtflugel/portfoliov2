import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  SiJavascript, SiTypescript, SiNodedotjs, SiExpress,
  SiCplusplus, SiPython, SiFirebase, SiFlutter, SiPostgresql,
  SiHtml5, SiCss3, SiReact, SiDart, SiPhp, SiGithub
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { LuPalette } from "react-icons/lu";
import { FaServer } from "react-icons/fa6";

// 👇 JSX tipi için React import edildi
interface Skill {
  icon: React.ReactNode | React.ReactNode[];
  title: string;
  desc: string;
}

const skills: Record<string, Skill[]> = {
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
      icon: <SiNodedotjs />,
      title: "Node.js",
      desc: "Sunucu taraflı uygulama geliştirme ortamı."
    },
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

const tabs = [
  { label: "Frontend", icon: <LuPalette style={{ marginRight: 10 }} /> },
  { label: "Backend", icon: <FaServer style={{ marginRight: 10 }} /> },
  { label: "Diğer", icon: <TbApi style={{ marginRight: 10 }} /> }
];

export default function Skills() {
  const [active, setActive] = useState<string>("Frontend");

  return (
    <motion.div
      className="skills"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <span className="section-heading"><span className="gradient">Yeteneklerim</span></span>

        <div className="skills-tabs">
          {tabs.map(({ label, icon }) => (
            <button
              key={label}
              className={active === label ? "active" : ""}
              onClick={() => setActive(label)}
            >
              {icon}{label}
            </button>
          ))}
        </div>

        <div className="skills-container">
          {skills[active].map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-sub-item">
                {Array.isArray(skill.icon)
                  ? skill.icon.map((i, idx) => <span key={idx} className="skill-icon">{i}</span>)
                  : <span className="skill-icon">{skill.icon}</span>}
                <span className="skills-title">{skill.title}</span>
              </div>
              <div className="skill-description">{skill.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
