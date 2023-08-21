import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {


  return (
    <section className='bg-black overflow-hidden'>
      <Navbar/>
      <Header/>
      <Main/>
      <Footer/>
    </section>
  )
}

export default App
