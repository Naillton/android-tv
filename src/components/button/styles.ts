import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import themes from "../../themes/themes";

export const Container = styled.TouchableOpacity`
  background-color: ${themes.colors.backButton};
  width: ${RFValue(200)}px;
  height: ${RFValue(40)}px;
  align-items: center;
  justify-content: center;
  border: ${RFValue(2)}px solid ${themes.colors.backButton};
  border-radius: ${RFValue(8)}px;
`;

export const TextBtn = styled.Text`
  font-size: ${RFValue(20)}px;
  text-transform: uppercase;
  font-weight: bold;
`;
