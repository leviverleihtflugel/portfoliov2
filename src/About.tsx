import "./App.css";
import { GoPerson } from 'react-icons/go';
import { RiTimeLine } from "react-icons/ri";
import { IoGameController } from 'react-icons/io5';
import { motion } from "motion/react";
import { FaGraduationCap } from "react-icons/fa";

function AboutMe() {
    return (
        <motion.div
            className="projects"
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="about" id="about">

                <div className="About-image-container">
                    <img className="About-img" src="omer.jpg" alt="Ömer Faruk Aydın" />
                </div>

                <div className="About-text">

                    <div className="About-paragraph">
                        <span className="About-para-title">
                            <GoPerson id="about-icon" /> <span className="gradient"> Hakkımda </span>
                        </span>
                        <span className="About-paragraph-text">
                            Merhaba! Ben Ömer Faruk Aydın. Sakarya Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Mobil uygulamalar, yapay zeka, oyun tasarımı ve web geliştirme alanlarında tutkulu bir yazılım geliştiricisiyim.
                            <br /><br />
                            Gerçek dünya problemlerine yönelik çözümler geliştirmeyi, üretmeyi ve öğrenmeyi çok seviyorum.
                        </span>
                    </div>

                    <div className="About-paragraph">
                        <span className="About-para-title">
                            <RiTimeLine id="about-icon" /> <span className="gradient"> Eğitim Yolculuğum </span>
                        </span>
                        <span className="About-paragraph-text">
                            Üniversiteye Sakarya Üniversitesi Elektrik-Elektronik Mühendisliği bölümünde başladım ve 3 yılın ardından Bilgisayar Mühendisliği bölümüne yatay geçiş yaptım. Bu süreçte temel mühendislik eğitiminin yanı sıra yazılım alanında birçok farklı teknolojiyle çalışma fırsatı buldum.
                            <br /><br />
                            C ve C++ dillerini sistem programlama ve terminal uygulamaları geliştirme projelerinde aktif olarak kullandım.
                            <br /><br />
                            Python ile özellikle yapay zeka, doğal dil işleme ve veri analizi üzerine çalıştım; Streamlit, Gradio ve Llama3 gibi kütüphanelerle projeler ürettim.
                            <br /><br />
                            JavaScript, TypeScript, React ve Node.js ile tam kapsamlı web uygulamaları geliştirdim.
                            <br /><br />
                            Flutter ve Dart ile mobil uygulama geliştirme alanında çapraz platform projeler gerçekleştirdim.
                            <br /><br />
                            Ayrıca Firebase, PostgreSQL gibi teknolojilerle veritabanı yönetimi, REST API geliştirme ve kullanıcı kimlik doğrulama gibi konularda deneyim kazandım.
                            <br /><br />
                            Bu deneyimler, hem frontend hem de backend tarafında üretken, optimize ve güvenli uygulamalar geliştirmeme olanak sağladı.
                        </span>
                    </div>

                    <div className="About-paragraph">
                        <span className="About-para-title">
                            <IoGameController id="about-icon" /> <span className="gradient"> İlgi Alanlarım </span>
                        </span>
                        <span className="About-paragraph-text">
                            Yeni teknolojileri keşfetmek, üretkenlik araçları geliştirmek ve açık kaynak topluluklarına katkı sağlamak beni motive ediyor.
                            <br /><br />
                            Kullanıcı deneyimi odaklı yazılımlar üretmek, sezgisel arayüzler tasarlamak ve yazılım mimarilerini araştırmak en çok ilgilendiğim alanlar arasında.
                            <br /><br />
                            Özellikle Flutter, React, Node.js ve Firebase ile üretim yapmaktan büyük keyif alıyorum. Aynı zamanda yazılımın sadece koddan ibaret olmadığını düşünüyor; düzenli, okunabilir ve sürdürülebilir kod yazımına özen gösteriyorum.
                        </span>
                    </div>

                    <div className="About-paragraph">
                        <span className="About-para-title">
                            <FaGraduationCap id="about-icon" /> <span className="gradient"> Şu An Ne Yapıyorum? </span>
                        </span>
                        <span className="About-paragraph-text">
                            Şu anda yazılım alanında derinleşmeye, teknik becerilerimi geliştirmeye ve sektörel gelişmeleri yakından takip etmeye odaklanmış durumdayım.
                            <br /><br />
                            Modern frontend teknolojileri, kullanıcı deneyimi tasarımı ve yazılım mimarileri üzerine öğrenmeye devam ediyor, edindiğim bilgileri kişisel projelerimde uygulayarak pratiğe döküyorum.
                            <br /><br />
                            Yazılım geliştirme sürecinde sürdürülebilirlik, temiz kod prensipleri, takım çalışması ve sürekli öğrenme benim için vazgeçilmez değerler arasında.
                        </span>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

export default AboutMe;
