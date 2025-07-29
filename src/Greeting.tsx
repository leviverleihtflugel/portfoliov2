import { TypeAnimation } from 'react-type-animation';
import { LuGithub } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { HiArrowDown, HiDownload } from "react-icons/hi";

import GradientText from './GradientText.tsx';

type Props = {
  handleDownloadAndView: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

const Greeting = ({ handleDownloadAndView }: Props) => {
  return (
    <div className="greeting" id="top">
      <div className="greeting-container">
        <span className="greeting-title" id="fade-in">
          Merhaba, ben&nbsp;
          <GradientText
            colors={["#e66465", "#9198e5", "#e66465", "#9198e5"]}
            animationSpeed={4}
            showBorder={false}
            className="greeting-title"
          >
            Ömer Faruk Aydın
          </GradientText>
        </span>

        <div id="fade-in2">
          <TypeAnimation
            className="greeting-subtitle"
            sequence={[
              ' Mobil Geliştirici',
              3000,
              ' Yapay Zeka Geliştiricisi',
              3000,
              ' Web Geliştirici',
              3000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </div>

        
        <div className="socials" id="fade-in3">
          <span className="resume" onClick={handleDownloadAndView}>
            <div className="social-item">
              <HiDownload
                style={{
                  fontSize: '20px',
                  marginRight: '10px',
                  verticalAlign: 'center',
                  color: 'white',
                }}
              />
              <span>CV'mi Görüntüle</span>
            </div>
          </span>

          <div className="social-item">
            <span className="social-icon">
              <a
                href="https://www.linkedin.com/in/omeraydın"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin
                  id="socialHover"
                  style={{
                    fontSize: '30px',
                    margin: '10px',
                    verticalAlign: 'center',
                  }}
                />
              </a>
            </span>
          </div>

          <div className="social-item">
            <span className="social-icon">
              <a
                href="https://github.com/leviverleihtflugel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuGithub
                  id="socialHover"
                  style={{
                    fontSize: '30px',
                    margin: '10px',
                    verticalAlign: 'center',
                  }}
                />
              </a>
            </span>
          </div>
        </div>

        <div className="scroll-down-container">
          <a className="scroll-down" href="#about">
            <span className="gradient">Aşağı kaydır veya tıkla</span>
            <HiArrowDown
              style={{
                display: 'flex',
                fontSize: '30px',
                margin: '10px',
                justifyContent: 'center',
                verticalAlign: 'center',
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
