import React from 'react';
import { DiFirebase, DiJava, DiProlog, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id = "tech">
<SectionDivider />
<br />
<br />
<SectionTitle>Technologies</SectionTitle>
<SectionText>
Frankly speaking, I'm more into designing algorithms and optimization​ yet​ not limited to making interactive applications using React and Next.js. <br />
</SectionText>
<List>
  <ListItem>
    <DiPython size = "3rem"/>
    <ListContainer>
      <ListTitle>Programming Languages</ListTitle>
      <ListParagraph>
        Java, Python, <br />
        C++, and GoLang
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiReact size = "3rem"/>
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        React, Next.js, <br />
        and Django
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size = "3rem"/>
    <ListContainer>
      <ListTitle>Back-End & Databases</ListTitle>
      <ListParagraph>
        Spring, MySQL, <br />
        and Apache Tomcat
      </ListParagraph>
    </ListContainer>
  </ListItem>
</List>
</Section>
);

export default Technologies;
