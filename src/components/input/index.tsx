import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import {
  InputCont,
  Input,
  TogglePasswordButton,
  ErrorLabel
} from './styles';

import { TextInputProps } from '../../types/types';

const FuncInput: React.FC<TextInputProps> = ({
    type = 'text',
    icon,
    Error = undefined,
    ...rest
  }) => {
  const [ visible, setVisible ] = useState(false);
  return (
    <>
      <InputCont>
        {
          type === 'password' ? (
            <TogglePasswordButton
              onPress={() => setVisible(!visible)}>
              {
                visible ? (
                  <Entypo name='eye' size={18} color='black' />
                ): (<Entypo name={icon} size={18} color='black' />)
              }
            </TogglePasswordButton>
          ) : <Entypo name={icon} size={18} color='black' />
        }
        <Input
          secureTextEntry = { type === 'password' && !visible }
          {...rest}
        />
      </InputCont>
      { Error && <ErrorLabel>{Error.message}</ErrorLabel>}
    </>
  )
}

export default FuncInput;