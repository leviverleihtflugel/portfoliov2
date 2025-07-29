import { FaPython, FaJs, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiFlutter, SiDart, SiMongodb, SiStreamlit, SiPostgresql, SiHtml5, SiCss3, SiJavascript, SiRiotgames } from "react-icons/si";
import { LuGithub } from "react-icons/lu";
import { Tooltip as ReactTooltip } from "react-tooltip";

import React, { JSX } from 'react';
import 'react-tooltip/dist/react-tooltip.css'
interface Tag {
    icon: JSX.Element;
    name: string;
}

interface ProjectCardProps {
    title: string;
    mediaType?: 'image' | 'youtube';
    youtubeId?: string;
    src: string;
    tags: Tag[];
    description: string;
    link: string;
    github: string;
}

const Project_card: React.FC<ProjectCardProps> = ({ mediaType = 'image', youtubeId, title, src, tags, description, github }) => {
    const renderMedia = () => {
        switch (mediaType) {
            case 'youtube':
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
            case 'image':
            default:
                return typeof src === 'string' ? (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <img src={src} alt={title} loading="lazy" />
                    </a>
                ) : (
                    src
                );
        }
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
                            <span key={index} className="tag" data-tooltip-id={`tags-tooltip-${index}`} data-tooltip-content={tag.name}>
                                {tag.icon}
                            </span>
                        ))}
                        {tags.map((_tag, index) => (
                            <ReactTooltip
                                key={index}
                                id={`tags-tooltip-${index}`}
                                place="bottom"
                                style={{ backgroundColor: '#0f152f', color: '#e66465', fontFamily: 'figtree, sans-serif' }}
                            />
                        ))}
                    </div>
                    <div className="project-text">{description}</div>
                    <div className="project-buttons">
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
}

function Projects() {
    return (
        <div className="projects" id="projects">
			<span className="section-heading"><span className="gradient">Projelerim</span></span>
            <span className="section-sub-heading">Farklı alanlarda geliştirdiğim projeler sayesinde Mobil, Web ve Yapay Zeka teknolojilerinde kapsamlı bir deneyim kazandım. Kullanıcı arayüzünden veritabanı yönetimine kadar uçtan uca yazılım çözümleri geliştiriyor, her aşamada modern teknolojilerle üretken çözümler sunuyorum.</span>
            <div className="project-container">

                <Project_card src="/farmermarket.jpg"
                    title="Farmer Market"
                    description="Çiftçilerle tüketicileri buluşturan rol tabanlı mobil pazar uygulaması."
                    
                    tags={[{ icon: <SiFlutter />, name: "Flutter" }, { icon: <SiDart />, name: "Dart" }, { icon: <SiMongodb />, name: "Firebase" }]}
                    link="https://github.com/leviverleihtflugel/farmer_market"
                    github="https://github.com/leviverleihtflugel/farmer_market"
                />

                <Project_card src="/riotappv2.jpg"
                    title="RiotApp V2"
                    description="League of Legends oyuncu istatistiklerini gösteren mobil uygulama."
                    
                    tags={[{ icon: <SiFlutter />, name: "Flutter" }, { icon: <SiDart />, name: "Dart" }, { icon: <SiRiotgames />, name: "Riot API" }]}
                    link="https://github.com/leviSEC/riotappv2"
                    github="https://github.com/leviSEC/riotappv2"
                />

                <Project_card src="/customer-support-agent.jpg"
                    title="Customer Support Agent"
                    description="Llama3 destekli müşteri destek yapay zekâ asistanı."
                    
                    tags={[{ icon: <FaPython />, name: "Python" }, { icon: <SiStreamlit />, name: "Streamlit" }]}
                    link="https://github.com/leviverleihtflugel/customer-support-agent"
                    github="https://github.com/leviverleihtflugel/customer-support-agent"
                />

                <Project_card src="/DatabaseManagmentSystems-Kedi_Hastanesi.gif"
                    title="Kedi Hastanesi DBMS"
                    description="Veteriner kliniği için veritabanı yönetim sistemi."
                    
                    tags={[{ icon: <FaJs />, name: "JavaScript" }, { icon: <FaNodeJs />, name: "Node.js" }, { icon: <SiPostgresql />, name: "PostgreSQL" }]}
                    link="https://github.com/leviverleihtflugel/DatabaseManagmentSystems-Kedi_Hastanesi"
                    github="https://github.com/leviverleihtflugel/DatabaseManagmentSystems-Kedi_Hastanesi"
                />

                <Project_card src="/Internet-Speed-Test.jpg"
                    title="İnternet Hız Testi"
                    description="İnternet hızını ölçen basit web aracı."
                 
                    tags={[{ icon: <SiJavascript />, name: "JavaScript" }, { icon: <SiHtml5 />, name: "HTML" }, { icon: <SiCss3 />, name: "CSS" }]}
                    link="https://github.com/leviverleihtflugel/Internet-Speed-Test"
                    github="https://github.com/leviverleihtflugel/Internet-Speed-Test"
                />

                <Project_card src="/Password-Generator.jpg"
                    title="Şifre Üreteci"
                    description="Güçlü ve rastgele şifreler oluşturan uygulama."
                   
                    tags={[{ icon: <SiJavascript />, name: "JavaScript" }, { icon: <SiHtml5 />, name: "HTML" }, { icon: <SiCss3 />, name: "CSS" }]}
                    link="https://github.com/leviverleihtflugel/Password-Generator"
                    github="https://github.com/leviverleihtflugel/Password-Generator"
                />

                <Project_card src="/placeholder.jpg"
                    title="PolicyGPT"
                    description="Vatandaşlık ve resmi işlemleri açıklayan LLM tabanlı chatbot."
                    
                    tags={[{ icon: <FaPython />, name: "Python" }]}
                    link=""
                    github="https://github.com/leviverleihtflugel/PolicyGPT"
                />

                <Project_card src="/placeholder.jpg"
                    title="VoiceGPT"
                    description="Türkçe sesli asistan. Whisper + Llama3 + gTTS tabanlı."
                    
                    tags={[{ icon: <FaPython />, name: "Python" }]}
                    link=""
                    github="https://github.com/leviverleihtflugel/VoiceGPT"
                />

            </div>
        </div>
    );
}

export default Projects;