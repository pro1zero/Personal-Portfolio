import React from 'react';
import { DiFirebase, DiPython, DiReact } from 'react-icons/di';
import { FaDocker } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id = "tech">
<SectionDivider />
<br />
<br />
<SectionTitle>Technologies</SectionTitle>
<SectionText>
Frankly speaking, I'm more into designing algorithms and optimization​ yet​ not limited to making interactive full-stack applications and using deployment platforms such as Docker and Kubernetes.  <br />
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
    <FaDocker size = "3rem"/>
    <ListContainer>
      <ListTitle>Platforms</ListTitle>
      <ListParagraph>
        Docker and <br />
        Kubernetes
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiReact size = "3rem"/>
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Next.js, React, <br />
        and Django
      </ListParagraph>
    </ListContainer>
  </ListItem>
</List>
<List>
<ListItem>
    <DiFirebase size = "3rem"/>
    <ListContainer>
      <ListTitle>Databases</ListTitle>
      <ListParagraph>
        MySQL and <br />
        Apache Tomcat
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <SiSpring size = "3rem"/>
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Spring
      </ListParagraph>
    </ListContainer>
  </ListItem>
  {/* <ListItem>
    <DiFirebase size = "3rem"/>
    <ListContainer>
      <ListTitle>Tools</ListTitle>
      <ListParagraph>
        
      </ListParagraph>
    </ListContainer>
  </ListItem> */}
</List>
</Section>
);

export default Technologies;
