import styled from '@emotion/styled'
import { useEffect } from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from './data/monedas'


const InputSubmit=styled.input`
background-color:#9497FF;
border:none;
width:100%;
padding:10px;
color:#FFF;
font-weight:700;
text-transform:uppercase;
margin-top:30px;
border-radius:2mm;
font-size:20px;
transition:background-color .3S ease-in-out;
&:hover{
    background-color: #7A7DFE;
    cursor:pointer;


}
`


const Formulario = () => {

    const [moneda,SelectMonedas]=useSelectMonedas('Elije tu Moneda', monedas)

    useEffect(()=>{
           const consultariAPI=async()=>{
               const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD'
                  const respuesta=await fetch(url)
                 const resultado=await respuesta.json()
                 console.log(resultado.Data)


                 const arraCrypto=resultado.Data.map(datos=>{
                    
                    const objeto={
                          
                          id:datos.CoinInfo.Name,
                          nombre:datos.CoinInfo.FullName,

                   } 
                    
                    
                    console.log(objeto)
                     
                   
            } )
              
        }
        consultariAPI()

    },[])


  return (
    <form>
       <InputSubmit
          type="submit"
           value='Cotizar'
       
       />
 


    </form>
  )
}

export default Formulario