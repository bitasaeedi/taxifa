import Home from "./Home";
import Description from "./description";
import ServicesInfo from "./ServicesInfo";
import Questions from "./Questions";
import CustomersReview from "./CustomersReview";
import ContactUs from "./contactUs";
import Footer from "./Footer";

function MainPage({t,handleLanguage}) {
    return (
        <>
            <Home t={t} handleLanguage={handleLanguage}/>
            <Description t={t}/>
            <ServicesInfo t={t}/>
            <Questions t={t}/>
            <CustomersReview t={t}/>
            <ContactUs t={t}/>
            <Footer t={t}/>
        </>
    );
}

export default MainPage;