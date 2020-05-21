import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ButtonList from './buttonList';

const Title = styled.h1`
  margin-bottom: 36px;
  font-size: 24px;
`;
export default function User() {
  const isThemeLight = useSelector((state) => state.setting.isThemeLight);
  return (
    <>
      <Title className={isThemeLight ? "color-dark" : "color-white"}>
        Nhân Viên
      </Title>
      <ButtonList/>
    </>
  );
}
