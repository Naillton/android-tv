import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import themes from "../../themes/themes";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${themes.colors.backScreen};
`;

export const Btn = styled.TouchableOpacity``;

export const Text = styled.Text`
  color: ${themes.colors.red};
  font-size: ${RFValue(20)}px;
  margin: ${RFValue(10)}px;
`;