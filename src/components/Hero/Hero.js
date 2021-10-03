import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hello, I'm Jenish <br />
        Welcome to my personal portfolio
      </SectionTitle>
      <SectionText>
        I'm a Computer Science student at Concordia University and make projects for fun. 
      </SectionText>
      <Button onClick = {() => window.location = "#about"}> Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;