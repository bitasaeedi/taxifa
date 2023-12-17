import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Description from "./components/description";
import ServicesInfo from "./components/ServicesInfo";
import Questions from "./components/Questions";
import CustomersReview from "./components/CustomersReview";
import ContactUs from "./components/contactUs";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import {useState} from "react";
import MainPage from "./components/MainPage";
import {Route, Router, Routes} from "react-router-dom";
function App() {
    const { t, i18n: {changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "du" : "en";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }
    return (
        <>
          <Routes>
              <Route path={'/'} element={<MainPage handleLanguage={handleChangeLanguage} t={t}/>}/>
              {/*<Route path={'/'} element={}/>*/}
          </Routes>

        </>
    );
}

export default App;
