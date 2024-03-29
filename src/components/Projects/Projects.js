import React from 'react';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents/index';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>My Recent Works</SectionTitle>
    <GridContainer>
      {projects.map(({ title, description, image, tags, source, visit, id }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <br />
          <div>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source} target="_blank" rel="noopener noreferrer">See Source <AiFillGithub size="2rem" /></ExternalLinks>
            {visit && (
              <ExternalLinks href={visit} target="_blank" rel="noopener noreferrer">
                See Live <AiFillEye size="2rem" />
              </ExternalLinks>
            )}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;