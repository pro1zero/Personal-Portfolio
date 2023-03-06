import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Allô, I'm Jenish! <br />
        I'm a Software Engineer at Getty Images
      </SectionTitle>
      <SectionText>
        Thanks for being here, follow along the website to know more about me!
      </SectionText>
      <Button onClick = {() => window.location = "#about"}> Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;