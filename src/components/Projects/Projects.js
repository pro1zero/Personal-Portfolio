import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, HeaderTwo } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemo = [
  {title: 'project1', description: 'a long description of the project.'},
  {title: 'project2', description: 'a long description of the project.'},
  {title: 'project3', description: 'a long description of the project.'},
  {title: 'project4', description: 'a long description of the project.'}
];

const Projects = () => (
<Section nopadding id = "projects">
<SectionDivider/>
<SectionTitle main>Projects</SectionTitle>
<GridContainer>
  {projects.map(({id, image, title, description, tags, source, visit}) => (
    <BlogCard key={id}>
      <Img src = {image}/>
      <TitleContent>
        <HeaderThree title>{title}</HeaderThree>
        <Hr></Hr>
      </TitleContent>
      <CardInfo>{description}</CardInfo>
      <div>
        <TitleContent>Stack</TitleContent>
        <TagList>
          {tags.map((tag, i) => (
            <Tag key = {i}>{tag}</Tag>
          ))}
        </TagList>
      </div>
      <UtilityList>
        <ExternalLinks href = {visit}> Code </ExternalLinks>
        <ExternalLinks href = {source}> Source </ExternalLinks>
      </UtilityList>
    </BlogCard>
  ))}
</GridContainer>
</Section>
);
export default Projects;