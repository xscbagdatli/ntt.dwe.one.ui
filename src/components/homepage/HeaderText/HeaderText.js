import React from "react";
import HeaderTextCss from "./styles.module.css"
import HomeLogo from '../../../assets/images/home-logo.png';
import { Trans, useTranslation } from 'react-i18next';

function HeaderText() {
  const { t } = useTranslation()

  return (
    <div className={HeaderTextCss.header_text_container}>
      <div>
        <div className={HeaderTextCss.header_title}>{t("HeaderTitle")}</div>
        <div className={HeaderTextCss.header_description}>
          <Trans
            i18nKey="HeaderDescription" // optional -> fallbacks to defaults if not provided
            // defaults="hello <italic>beautiful</italic> <bold>{{what}}</bold>" // optional defaultValue
            // values={{ what: 'world'}}
            components={{ italic: <i />, bold: <strong />, break: <br /> }}
          />
        </div>
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
