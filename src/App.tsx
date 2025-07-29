import Navigation from './Navigation';
import Greeting from './Greeting';
import AboutMe from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Squares from './Squares.tsx';
import { Analytics } from "@vercel/analytics/react";

declare global {
  interface Window {
    sa_event?: (event: string) => void;
  }
}

function App() {
  window.addEventListener("blur", () => {
    document.title = "Ömer Faruk Aydın - Yazılım Geliştirici";
  });

  window.addEventListener("focus", () => {
    document.title = "Ömer Faruk Aydın - Yazılım Geliştirici";
  });

  const handleDownloadAndView = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();
    if (typeof window.sa_event === 'function') {
      window.sa_event('cv_downloaded');
    } else {
      console.error("Simple Analytics isn't loaded");
    }
    const link = document.createElement('a');
    link.href = '/Ömer Faruk Aydın CV- EN .pdf';
    link.download = '/Ömer Faruk Aydın CV- EN .pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navigation />

      <div className="greeting-bg-wrap">
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='#5f5959ff'
        />
        <Greeting handleDownloadAndView={handleDownloadAndView} />
      </div>

      <AboutMe />
      <Skills />
      <Projects />
      <BackToTop />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
