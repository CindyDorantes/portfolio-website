import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents/index';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there. I'm Cindy <br />
        I'm a Full Stack Developer 
      </SectionTitle>
      <SectionText>
        Take a look at my projects, crafted with creativity and expertise in both front-end and back-end development. If you're looking for a developer who's passionate about creating exceptional websites, get in touch today. Let's bring your vision to life!
      </SectionText>
      <Button onClick={() => window.location = "#about"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;