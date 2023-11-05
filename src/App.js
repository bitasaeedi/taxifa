import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Description from "./components/description";
import ServicesInfo from "./components/ServicesInfo";
import Questions from "./components/Questions";
import CustomersReview from "./components/CustomersReview";
import ContactUs from "./components/contactUs";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header/>
            <Home/>
            <Description/>
            <ServicesInfo/>
            <Questions/>
            {/*<CustomersReview/>*/}
            <ContactUs/>
            <Footer/>
        </>
    );
}

export default App;
