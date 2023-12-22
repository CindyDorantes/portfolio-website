import React from 'react';
import { DiFirebase, DiReact, DiGit } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, RedButton } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="about">
    <SectionDivider />
    <SectionTitle><br />About me</SectionTitle>
    <SectionText>
      I am a highly skilled full-stack developer with expertise in several key technologies.
      <br /><br />
      With a track record of delivering high-quality, responsive solutions, I am confident in my ability to take on any development challenge.
      <br /><br />
      Outside of my professional pursuits, I am a meditation practitioner and amateur photographer with a deep passion for cinematography. 
    </SectionText>
    <RedButton href="https://drive.google.com/file/d/1Ir5hmk7g8v1Q9MulCQYgfPPAf_yNT0MA/view?usp=share_link" 
      style={{ width: "15rem"}} target="_blank" rel="noopener noreferrer">
      Get my resume
    </RedButton>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            JavaScript <br />
            React <br />
            Redux <br />
            HTML5 <br />
            CSS3 <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Ruby <br />
            Ruby on Rails <br />
            MySQL <br />
            PostgreSQL <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Tools & Methods</ListTitle>
          <ListParagraph>
            Git <br />
            GitHub <br />
            RSpec <br />
            Jest <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    
  </Section>
);

export default Technologies;
