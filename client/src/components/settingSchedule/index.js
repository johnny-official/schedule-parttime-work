import React from "react";
import translate from "../../asset/i18n/translate";
import Title from "../common/title";
import ButtonList from "./buttonList";

export default function SettingSchedule() {
  return (
    <>
      <Title className="color-dark">{translate("settingSchedule")}</Title>
      <ButtonList />
    </>
  );
}