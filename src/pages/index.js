import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents/index';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Contact />
    </Layout>
  );
};

export default Home;
