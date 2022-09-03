import { GET_ALL_CHARACTERS } from "@/about/gql/characters";
import { useQuery } from "@apollo/client";
import React from "react";
import { STextBlock, STextCopy } from "./TextBlock.styles";

export const TextBlock = () => {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);

  console.log(data);

  return (
    <STextBlock hasShadow>
      <STextCopy>first line</STextCopy>
      <STextCopy>second line</STextCopy>
    </STextBlock>
  );
};
