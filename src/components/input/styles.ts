import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  TextInput,
  TextInputProps,
} from 'react-native';

import themes from "../../themes/themes";

export const InputCont = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${RFValue(25)}%;
  height: ${RFValue(42)}px;
  background-color: ${themes.colors.white};
  border: ${RFValue(2)}px solid ${themes.colors.white};
  margin: ${RFValue(12)}px;
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(8)}px;
`;

export const Input = styled(TextInput).attrs<TextInputProps>({
  placeholderTextColor: themes.colors.greyBoro,
})`
  color: ${themes.colors.Black}
  font-size: ${RFValue(16)}px;
  margin-left: ${RFValue(10)}px;
`;

export const TogglePasswordButton = styled.TouchableOpacity`
`;

export const ErrorLabel = styled.Text`
  font-size: ${RFValue(13)}px
  color: ${themes.colors.red}
`;
