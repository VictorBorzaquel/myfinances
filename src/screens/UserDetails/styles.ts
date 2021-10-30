import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const GoBackHeader = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.display.padding_app}px;
`;

export const GoBackTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.family.title};
  font-size: ${({ theme }) => theme.fonts.size.medium}px;
`;

export const Content = styled.View`
  padding: ${({ theme }) => theme.display.padding_app}px;
  /* justify-content: space-between; */
  align-items: center;
  flex: 1;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.family.title};
  font-size: ${({ theme }) => theme.fonts.size.medium}px;
`;

export const Buttons = styled.View`
  padding: ${({ theme }) => theme.display.padding_app}px;
`;