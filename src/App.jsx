import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messagesEn from './lang/en-US.json'
import messagesEs from './lang/es-ES.json'
import { useState } from 'react'

function App() {

  const [changeLang, setChangeLang] = useState(false)

  const handleChangeLangueage = () => {
    setChangeLang(!changeLang)
  }

  return (
    <IntlProvider locale='es-MX' messages={changeLang ? messagesEn : messagesEs}>
    <section id='home' className=' bg-white dark:bg-[#5C8374] dark:text-white' >
      <Navbar handleChangeLangueage={handleChangeLangueage}/>
      <Header/>
      <Main/>
      <Footer/>
    </section>
    </IntlProvider>
  )
}

export default App
