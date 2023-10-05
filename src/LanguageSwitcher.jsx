import React, { useReducer } from 'react';
// import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { switchLang } from './store';

const LanguageSwitcher = () => {
  // const { i18n } = useTranslation();
  const dispatch = useDispatch()
  const currentLang = useSelector(({lang}) => lang)
  console.log("current lan", currentLang)

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    dispatch(switchLang({lang: newLang}))
    // i18n.changeLanguage(newLang);
  };

  return (
    <select value={currentLang} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  );
};

export default LanguageSwitcher;
