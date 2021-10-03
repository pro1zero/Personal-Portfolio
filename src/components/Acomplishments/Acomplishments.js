import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Projects'},
  { number: 17, text: 'Repositories' },
  { number: 365, text: 'Leetcode Counter' },
  { number: 1700, text: 'Blitz ELO' }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Statistics
    </SectionTitle>
    <Boxes>
    {data.map((card, index) => (
        <Box key = {index}>
          <BoxNum> {card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
