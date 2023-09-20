
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {

  const {i18n, t} = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en'? 'ru' : 'en');
  }
  const togLang = () => {
    i18n.changeLanguage(i18n.language === 'ru'? 'es' : 'ru');
  }
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es'? 'en' : 'es');
  }
  // const toggleLang = e = i18n.changeLanguage(i18n.language === e.target.value)

  return (
    <div className="App">
      <h1>{t('Greeting')}</h1>
      <h2>{t('Welcome')}</h2>
      <h2>{t('Happy')}</h2>
      {/* <button onClick={toggleLang}>
        {i18n.language === 'en' ? "RU" : "EN"}
      </button> */}
      <button  onClick={toggleLang}>EN</button>
      <button  onClick={togLang}>RU</button>
      <button  onClick={toggleLanguage}>ES</button>
    </div>
  );
}
export default App;
