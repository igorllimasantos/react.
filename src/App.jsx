import './App.css'

function BotaoPersonalizado(){
  
  return <button>Ola Mundo</button>
}


function App() {
  return (
      <div> 
        <BotaoPersonalizado />
        <BotaoPersonalizado />
        <BotaoPersonalizado />
      </div>
  )
}

export default App
