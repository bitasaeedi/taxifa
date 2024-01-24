import Home from "./Home";
import Description from "./description";
import ServicesInfo from "./ServicesInfo";
import Questions from "./Questions";
import CustomersReview from "./CustomersReview";
import ContactUs from "./contactUs";
import Footer from "./Footer";
import PersonInfo from "./personInfo";
import TableSection from "./tableSection";

function MainPage({t,handleLanguage}) {
    return (
        <>
            <PersonInfo/>
            <Home t={t} handleLanguage={handleLanguage}/>
            <Description t={t}/>
            <ServicesInfo t={t}/>
            <TableSection/>
            <Questions t={t}/>
            <CustomersReview t={t}/>
            <ContactUs t={t}/>
            <Footer t={t}/>
        </>
    );
}

export default MainPage;