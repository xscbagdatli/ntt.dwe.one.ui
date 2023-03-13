import React from "react";
import HeaderTextCss from "./styles.module.css"
import HomeLogo from '../../assets/images/home-logo.png';
import { useTranslation } from 'react-i18next';

function HeaderText() {
  const { t } = useTranslation()

  return (
    <div className={HeaderTextCss.header_text_container}>
      <div>
        <div className={HeaderTextCss.header_title}>{t("HeaderTitle")}</div>
        <div className={HeaderTextCss.header_description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      </div>
      <img
        className={HeaderTextCss.header_text_logo}
        alt="Home logo."
        src={HomeLogo}
      />
    </div>

  );
}

export default HeaderText
