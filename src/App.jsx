import { useState } from "react";
import { IntlProvider } from "react-intl";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import messagesEn from "./lang/en-US.json";
import messagesEs from "./lang/es-ES.json";
import BackgroundParticles from "./components/BackgroundParticles";

function App() {
  const [changeLang, setChangeLang] = useState(false);

  const handleChangeLangueage = () => {
    setChangeLang(!changeLang);
  };

  return (
    <IntlProvider
      locale="es-MX"
      messages={changeLang ? messagesEn : messagesEs}
    >
      <section
        id="home"
        className="bg-[#ffffff] dark:bg-[#111f33] dark:text-white grid gap-3"
      >
        <Navbar handleChangeLangueage={handleChangeLangueage} />
        <BackgroundParticles />
        <Header />
        <Main />
        <Footer changeLang={changeLang}/>
      </section>
    </IntlProvider>
  );
}

export default App;
