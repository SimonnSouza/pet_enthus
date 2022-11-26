import React from 'react'
import '.././styles.css'



function CriaRegistro (props: any){


    const [pet, setPet] = React.useState({
        nomePet: "",
        qualPet: "",
        racaPet: "",
        nomeTutor:"", 
        telTutor:"",
        emailTutor:"" 
      }); 
    


      function ClicaBotao (){
        props.adicionaNaLista(pet)
        setPet({
            nomePet: "",
            qualPet: "",
            racaPet: "",
            nomeTutor:"", 
            telTutor:"",
            emailTutor:"" 
            
        })
        
      }

      function handleChange(event:any) {
        const value = event.target.value;
    
        setPet({
            ...pet,
            [event.target.name]: value,
          
        });

      }        

    return(
    <div className='parteInputs'>
        <form className='formulario'>
            <label htmlFor='nomePet' >
                Nome do Pet:
            </label>
            <input 
            type="text" id='nomePet'  className='padraoInput'
            placeholder='Digite o nome do Pet'
            name='nomePet' value={pet.nomePet} onChange={handleChange} required/>

            <label htmlFor='qualPet'>
                O Pet é um (a):
            </label >
            <input type='select' id='qualPet' className='padraoInput'placeholder='Tipo de Animal'
             name='qualPet' value={pet.qualPet} onChange={handleChange} required/>

            <label htmlFor='racaPet'>
                Da raça:
            </label>
            <select id='racaPet' className='padraoInput'placeholder='SRD'
             name='racaPet' value={pet.racaPet} onChange={handleChange}>
                <option value="Raça não fornecida" ></option>
                <option value="Bulldog">Bulldog</option>
                <option value="Chihauhua">Chihauhua</option>
                <option value="Shih Tzu">Shih Tzu</option>
                <option value="Pug">Pug</option>
                <option value="Pastor Alemão">Pastor Alemão</option>
                <option value="Husk Siberiano">Husk Siberiano</option>
                <option value="Dobermann">Dobermann</option>
             </select>
            
            

            <label htmlFor='nomeTutor'>
                Seu(a) tutor(a) se chama:
            </label>
            <input type="text" id='nomeTutor' className='padraoInput' placeholder='Nome do Humano'
            name='nomeTutor' value={pet.nomeTutor} onChange={handleChange} required />

            <label htmlFor='telTutor'>
                Celular do(a) tutor(a):
            </label>

            <input type="number" id='telTutor' className='padraoInput' placeholder='(XX) XXXXX-XXXX'
            name='telTutor' value={pet.telTutor} onChange={handleChange} required onWheel={event => event.currentTarget.blur()}/>

            <label htmlFor='emailTutor'>
                E-mail do(a) tutor(a):
            </label>
            <input type="email" id='emailTutor' className='padraoInput' placeholder='email@dominio.com'
            name='emailTutor' value={pet.emailTutor} onChange={handleChange} required/>
            
            <input type="reset" value="Cadastrar" id='botaoConfirma' onClick={ClicaBotao} />
            
        </form>
    
    </div>

    )
    
}

export default CriaRegistro;