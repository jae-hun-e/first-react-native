import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import styled from "styled-components/native";

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = ({
  navigation: { navigate },
}) => {
  return (
    <Btn onPress={() => navigate("Stack", { screen: "Two" })}>
      <SText>Movies</SText>
    </Btn>
  );
};

export default Movies;

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) => prop.theme.mainBgColor};
`;

const SText = styled.Text`
  color: ${(prop) => prop.theme.textColor};
  font-size: 20px;
`;
