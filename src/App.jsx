import './App.css'
import NavBar  from './components/navBar/navBar.jsx'
import HomePage from './components/homePage/homePage.jsx';
import Options from './components/options/option.jsx';
import Formulario from './components/send/send.jsx';
import Transaction from './components/transactions/transactions.jsx';

const  App=() =>(
    <>
    <NavBar />
    <HomePage />
    <Options/>
    <Formulario/>
    <Transaction/>
    </>
  )

export default App
