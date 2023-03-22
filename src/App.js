import i18next from "i18next";
import React from "react";
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <div className="App">
        <button onClick={() => handleClick('eng')} >
          English
        </button>
        <button onClick={() => handleClick('ru')} >
          Russian
        </button>
        <button onClick={() => handleClick('uz')} >
          Uzbek
        </button>
      <header className="App-header">
        <p>
          <h3>{t('thanks.text')}</h3>  <h3>{t('name.last_text')}</h3>
        </p>
      </header>
    </div>
  )
}
