import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { GiChessQueen } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, Span, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href = "/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "18px"}}>
          <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = "#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href = "#exp">
          <NavLink>Experience</NavLink>
        </Link>
      </li> */}
      <li>
        <Link href = "#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href = "https://github.com/pro1zero?tab=repositories">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://www.linkedin.com/in/jenishbsoni/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://www.instagram.com/jenishsoni10/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://lichess.org/@/pro1zero">
        <GiChessQueen size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
