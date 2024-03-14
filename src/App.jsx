import './App.css'
import NavBar  from './components/navBar/navBar.jsx'
import HomePage from './components/homePage/homePage.jsx';
import Options from './components/options/option.jsx';
import Formulario from './components/send/send.jsx';

const  App=() =>(
    <>
    <NavBar />
    <HomePage />
    <Options/>
    <Formulario/>
    <div>
      <h1>Hi</h1>
    </div>
    </>
  )

export default App
