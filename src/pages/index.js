import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <head>
        <title>Jenish's Portfolio</title>
        <meta name="Jenish Soni's Personal Portfolio" />
        <meta property="og:title" content="Jenish's Portfolio" />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content="https://www.jenishsoni.com/" />
        <meta property="og:image" content="1.png" />
      </head>
      <Section grid>
        <Hero />
         <BgAnimation />
       </Section> 
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
