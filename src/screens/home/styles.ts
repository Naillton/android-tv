import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import themes from "../../themes/themes";

export const Container = styled.View`
  flex: 1;
  background-color: ${themes.colors.backScreen};
  align-items: center;
`;

export const ContainerList = styled.View`
  flex-direction: row;
  margin: ${RFValue(10)}px;
  align-items: center;
`;

export const Item = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(100)}px;
`;
