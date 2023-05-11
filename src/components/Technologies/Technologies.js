import React from 'react';
import { DiFirebase, DiReact, DiGit } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, RedButton } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="about">
    <SectionDivider />
    <SectionTitle><br />About me</SectionTitle>
    <SectionText>
    I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
    </SectionText>
    <RedButton href="https://drive.google.com/file/d/1Ir5hmk7g8v1Q9MulCQYgfPPAf_yNT0MA/view?usp=share_link" style={{ width: "15rem"}}>
      Get my resume
    </RedButton>
    
  </Section>
);

export default Technologies;
