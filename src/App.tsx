import React from "react"

/* Sem JSX
const App = () =>{

  return React.createElement('a',{
    href: 'http://google.com.br'
  },'Clique aqui')
}

export default App
*/

/*
const App = () =>{
  return (
    <a href='https//google.com.br'>Clique aqui 2.0</a>
  )
  }
  */

import{Header} from './components/Header' 



  const App = () =>{
    
    const handleButtonClick= () =>{
      alert("Fui clicado")
    }

    return(
    
      <button onClick={handleButtonClick}> Clique aqui!</button>

      /*
      <div>
      <Header title="TI102" subtitle="não formados" />
      
      </div>
      */
    )
  }

  

  export default App