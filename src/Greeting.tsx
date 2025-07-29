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
    <div className="greeting min-h-screen flex flex-col items-center justify-center px-4 text-center" id="top">
      <div className="greeting-container max-w-3xl w-full">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-snug" id="fade-in">
          Merhaba, ben&nbsp;
          <GradientText
            colors={["#e66465", "#9198e5", "#e66465", "#9198e5"]}
            animationSpeed={4}
            showBorder={false}
            className="inline"
          >
            Ömer Faruk Aydın
          </GradientText>
        </h1>

        <div className="text-lg sm:text-xl mb-6 text-gray-300" id="fade-in2">
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

        <div className="socials flex flex-col sm:flex-row items-center justify-center gap-4 mb-8" id="fade-in3">
          <button
            onClick={handleDownloadAndView}
            className="flex items-center gap-2 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md"
          >
            <HiDownload className="text-lg" />
            CV'mi Görüntüle
          </button>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/omeraydın"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0077b5]"
            >
              <IoLogoLinkedin className="text-2xl sm:text-3xl" />
            </a>
            <a
              href="https://github.com/leviverleihtflugel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <LuGithub className="text-2xl sm:text-3xl" />
            </a>
          </div>
        </div>

        <div className="scroll-down-container mt-4">
          <a className="scroll-down flex flex-col items-center text-sm text-pink-300 hover:text-pink-400 transition" href="#about">
            <span className="gradient">Aşağı kaydır veya tıkla</span>
            <HiArrowDown className="text-2xl mt-1 animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
