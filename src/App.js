import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Description from "./components/description";
import ServicesInfo from "./components/ServicesInfo";
import Questions from "./components/Questions";

function App() {
    return (
        <>
            <Header/>
            <Home/>
            <Description/>
            <ServicesInfo/>
            <Questions/>
        </>
    );
}

export default App;
