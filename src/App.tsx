import React from 'react';
import LogoEfoto from './Divisas/divLogo';
import CriaRegistro from './Divisas/divRegistro';
import ListaDePets from './Divisas/divResultado';
import './styles.css'


function App() {

const [propLista, setPropLista] = React.useState<Array<any>>([])

function adicionaNaLista(pet: any){
  setPropLista([...propLista, pet])
}

  return (
    <div className="App">
      <div className='ladoAlado'>
        <LogoEfoto />
        <CriaRegistro adicionaNaLista={adicionaNaLista} />
      </div>
      <div className='listaMutavel'>
        <ListaDePets propLista={propLista}/>
      </div>
    </div>
  );
}

export default App;
