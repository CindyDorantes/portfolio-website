import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiOutlineMedium } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1 style={{ marginTop: "8px"}}>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <DiCssdeck size="3rem" /> <Span>Cindy Dorantes</Span>
        </a>
      </Link>
    </Div1>
    <Div2 style={{ marginTop: "8px"}}>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>    
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
