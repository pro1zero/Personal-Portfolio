import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 7, text: 'Projects'},
  { number: 18, text: 'Repositories' },
  { number: 365, text: 'Leetcode Counter' },
  { number: 4500, text: 'Blitz Games' }
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
