import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {


  return (
    <section className='overflow-hidden bg-[#183d3d]'>
      <Navbar/>
      <Header/>
      <Home/>
      <Main/>
      <Footer/>
    </section>
  )
}

export default App
