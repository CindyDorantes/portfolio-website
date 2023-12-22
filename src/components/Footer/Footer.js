import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiOutlineMedium, AiFillMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:cindym.dorantes@gmail.com'>
             cindym.dorantes@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Taking development to the next level through human connection</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://twitter.com/CindyDorantes10" target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter size="2.5rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/cindydorantessanchez/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="2.5rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/CindyDorantes" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="2.5rem" />
          </SocialIcons>
          <SocialIcons href="https://medium.com/@cindym.dorantes" target="_blank" rel="noopener noreferrer">
            <AiOutlineMedium size="2.5rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
