import React from 'react'
import '.././styles.css'
import {useState} from  'react'

interface IpropLista {
    nomePet: string,
    qualPet: string,
    racaPet: string,
    nomeTutor: string, 
    telTutor: string,
    emailTutor: string 
}

function ListaDePets ({propLista}: { propLista: IpropLista[]}){



    return(
        <table className='fullTable'>
            <div>
                <thead className='cabecalho'>
                    <tr >
                        <th className='escritaCabecalho'>Nome do Pet:</th>
                        <th className='escritaCabecalho'>O Pet é um(a):</th>
                        <th className='escritaCabecalho'>Da raça:</th>
                        <th className='escritaCabecalho'>Seu(a) tutor(a) se chama:</th>
                        <th className='escritaCabecalho'>Celular do(a) tutor(a)</th>
                        <th className='escritaCabecalho'>E-mail do(a) tutor(a)</th>
                    </tr>
                </thead>
            </div>
            <div >
                <tbody className='listaReativa'>
                    {propLista.map((animal, index) =>(
                        <tr key={index}>
                            <td className='adicoesLista'>{animal.nomePet}</td>
                            <td className='adicoesLista'>{animal.qualPet}</td>
                            <td className='adicoesLista'>{animal.racaPet}</td>
                            <td className='adicoesLista'>{animal.nomeTutor}</td>
                            <td className='adicoesLista'>{animal.telTutor}</td>
                            <td className='adicoesLista'>{animal.emailTutor}</td>
                        </tr>     
                    ))}
                </tbody>
            </div>
        </table>
    )
}

export default ListaDePets;