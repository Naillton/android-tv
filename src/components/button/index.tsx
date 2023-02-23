import React from 'react';
import {
  Container,
  TextBtn,
} from './styles';

import { IButton } from '../../types/types';

const Button: React.FC<IButton> = ({ func, text }) => {
  return(
    <Container
      onPress={ func }
    >
      <TextBtn>{ text }</TextBtn>
    </Container>
  )
}

export default Button;
