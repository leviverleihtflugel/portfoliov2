import React, { JSX } from 'react';
import { FaJs, FaNodeJs, FaPython } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import {
  SiPostgresql, SiDart, SiFlutter, SiMongodb,
  SiHtml5, SiCss3, SiStreamlit, SiJavascript, SiRiotgames
} from 'react-icons/si';
import { GoLinkExternal } from "react-icons/go";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { motion } from "motion/react";

interface Tag {
  icon: JSX.Element;
  name: string;
}

interface ProjectCardProps {
  title: string;
  mediaType?: 'image' | 'youtube';
  youtubeId?: string;
  src?: string;
  tags: Tag[];
  description: string;
  link?: string;
  github: string;
}

const Project_card: React.FC<ProjectCardProps> = ({
  mediaType = 'image',
  youtubeId,
  title,
  src,
  tags,
  description,
  link,
  github
}) => {
  const renderMedia = () => {
    if (mediaType === 'youtube' && youtubeId) {
      return (
        <iframe
          className="project-video"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    if (mediaType === 'image' && src) {
      return (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={title} loading="lazy" />
        </a>
      );
    }

    return null;
  };

  return (
    <motion.div
      className="projects"
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="project-card">
        <div className={`project-image ${mediaType}`}>{renderMedia()}</div>
        <div className="project-information">
          <span className="project-title"><div className="gradient">{title}</div></span>
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="tag"
                data-tooltip-id="tags-tooltip"
                data-tooltip-content={tag.name}
              >
                {tag.icon}
              </span>
            ))}
          </div>
          <div className="project-text">{description}</div>
          <div className="project-buttons">
            {link && (
              <div className="project-button">
                <a className="live-button" href={link} target="_blank" rel="noopener noreferrer">
                  <GoLinkExternal style={{ fontSize: "20px" }} />
                  <span className="button-text">Demo</span>
                </a>
              </div>
            )}
            <div className="project-button">
              <a className="github-button" href={github} target="_blank" rel="noopener noreferrer">
                <LuGithub style={{ fontSize: "23px" }} />
                <span className="button-text">Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function Projects() {
  return (
    <div className="projects" id="projects">
      <span className="section-heading"><span className="gradient">Projelerim</span></span>
      <span className="section-sub-heading">
        Farklı alanlarda geliştirdiğim projeler sayesinde Mobil, Web ve Yapay Zeka teknolojilerinde kapsamlı bir deneyim kazandım. Kullanıcı arayüzünden veritabanı yönetimine kadar uçtan uca yazılım çözümleri geliştiriyor, her aşamada modern teknolojilerle üretken çözümler sunuyorum.
      </span>
      <div className="project-container">

        <Project_card
          title="Farmer Market"
          description="Çiftçilerle tüketicileri buluşturan rol tabanlı mobil pazar uygulaması."
          src=""
          tags={[{ icon: <SiFlutter />, name: "Flutter" }, { icon: <SiDart />, name: "Dart" }, { icon: <SiMongodb />, name: "Firebase" }]}
          link="https://github.com/leviverleihtflugel/farmer_market"
          github="https://github.com/leviverleihtflugel/farmer_market"
        />

        <Project_card
          title="RiotApp V2"
          description="League of Legends oyuncu istatistiklerini gösteren mobil uygulama."
          src=""
          tags={[{ icon: <SiFlutter />, name: "Flutter" }, { icon: <SiDart />, name: "Dart" }, { icon: <SiRiotgames />, name: "Riot API" }]}
          link="https://github.com/leviSEC/riotappv2"
          github="https://github.com/leviSEC/riotappv2"
        />

        <Project_card
          title="Customer Support Agent"
          description="Llama3 destekli müşteri destek yapay zekâ asistanı."
          src=""
          tags={[{ icon: <FaPython />, name: "Python" }, { icon: <SiStreamlit />, name: "Streamlit" }]}
          link="https://github.com/leviverleihtflugel/customer-support-agent"
          github="https://github.com/leviverleihtflugel/customer-support-agent"
        />

        <Project_card
          title="Kedi Hastanesi DBMS"
          description="Veteriner kliniği için veritabanı yönetim sistemi."
          src=""
          tags={[{ icon: <FaJs />, name: "JavaScript" }, { icon: <FaNodeJs />, name: "Node.js" }, { icon: <SiPostgresql />, name: "PostgreSQL" }]}
          link="https://github.com/leviverleihtflugel/DatabaseManagmentSystems-Kedi_Hastanesi"
          github="https://github.com/leviverleihtflugel/DatabaseManagmentSystems-Kedi_Hastanesi"
        />

        <Project_card
          title="İnternet Hız Testi"
          description="İnternet hızını ölçen basit web aracı."
          src=""
          tags={[{ icon: <SiJavascript />, name: "JavaScript" }, { icon: <SiHtml5 />, name: "HTML" }, { icon: <SiCss3 />, name: "CSS" }]}
          link="https://github.com/leviverleihtflugel/Internet-Speed-Test"
          github="https://github.com/leviverleihtflugel/Internet-Speed-Test"
        />

        <Project_card
          title="Şifre Üreteci"
          description="Güçlü ve rastgele şifreler oluşturan uygulama."
          src=""
          tags={[{ icon: <SiJavascript />, name: "JavaScript" }, { icon: <SiHtml5 />, name: "HTML" }, { icon: <SiCss3 />, name: "CSS" }]}
          link="https://github.com/leviverleihtflugel/Password-Generator"
          github="https://github.com/leviverleihtflugel/Password-Generator"
        />

        <Project_card
          title="PolicyGPT"
          description="Vatandaşlık ve resmi işlemleri açıklayan LLM tabanlı chatbot."
          src=""
          tags={[{ icon: <FaPython />, name: "Python" }]}
          github="https://github.com/leviverleihtflugel/PolicyGPT"
        />

        <Project_card
          title="VoiceGPT"
          description="Türkçe sesli asistan. Whisper + Llama3 + gTTS tabanlı."
          src=""
          tags={[{ icon: <FaPython />, name: "Python" }]}
          github="https://github.com/leviverleihtflugel/VoiceGPT"
        />

      </div>

      {/* Tooltip global tanımı */}
      <ReactTooltip
        id="tags-tooltip"
        place="bottom"
        style={{ backgroundColor: '#0f152f', color: '#e66465', fontFamily: 'figtree, sans-serif' }}
      />
    </div>
  );
}

export default Projects;
