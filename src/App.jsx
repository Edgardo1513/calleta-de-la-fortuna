
import './App.css'
import Phrases from './components/Phrases'
import CardFrases from './components/CardFrases'
import phrases from './data/phrases.json'
import { useState } from 'react'





function App() {
  const fondos = [ 

    "url(src/assets/fondo1.png)", 
    "url(src/assets/fondo2.png)",
    "url(src/assets/fondo3.png)",
    "url(src/assets/fondo4.png)", 
    "url(src/assets/fondo5.jpg)", 
    "url(src/assets/fondo6.jpg)",
    "url(src/assets/fondo7.jpg)",
    "url(src/assets/fondo8.jpg)", 
    "url(src/assets/fondo9.jpg)",
    "url(src/assets/fondo10.jpg)",
    "url(src/assets/fondo11.jpg)", 
    "url(src/assets/fondo12.jpg)",
    "url(src/assets/fondo13.jpg)",
    "url(src/assets/fondo14.jpg)", 
    "url(src/assets/fondo15.jpg)"    
  ] 
  
  const [ index, setIndex ] = useState( 0 )
  const changeFrases = () => { 
    if( index === (phrases.length - 1 ) ){   
    setIndex( 0 )
     }else{
    setIndex( index + 1 )
    }
  }  
  
  return (
    <div className="App card" style={{backgroundImage: fondos[index]}}> 
      
      <CardFrases />        
      <Phrases dataFrases={ phrases[index] }  />      
      <button  onClick={ changeFrases } > Probar mi suerte </button>
    </div>
  )
}

export default App
