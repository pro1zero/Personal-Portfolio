import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiChessQueen } from 'react-icons/gi';
import { SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionDivider />
      <br />
      <SectionTitle>Contact</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Telephone</LinkTitle>
          <LinkItem href="tel: 416-605-5790"> 416-605-5790</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jenish1097@gmail.com">jenish1097@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>The more I learn, the more I give it back to my community.</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/pro1zero?tab=repositories">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/jenishbsoni/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/jenishsoni10/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href = "https://lichess.org/@/pro1zero">
        <GiChessQueen size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
