import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 9, text: 'Projects'},
  { number: 19, text: 'Repositories' },
  { number: 375, text: 'Leetcode Counter' },
  { number: 4559, text: 'Blitz Games' }
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
