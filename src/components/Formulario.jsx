import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from './data/monedas'
import MensajeError from './MensajeError'



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


const Formulario = ({setMonedas,cotizar}) => {


    const[crytpo,setCrypto]=useState([])
    const[error,setError]=useState(false)
    const [moneda,SelectMonedas]=useSelectMonedas('Elije tu Moneda', monedas)
    const [cryptoMoneda,SelectCryptoMoneda]=useSelectMonedas('Elije tu Crypto Moneda', crytpo)


   

    useEffect(()=>{
           const consultariAPI=async()=>{
               const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
                  const respuesta=await fetch(url)
                 const resultado=await respuesta.json()
                

                 const arraCrypto=resultado.Data.map(datos=>{
                      
                       
                    
                    const objeto={
                          
                          id:datos.CoinInfo.Name,
                          nombre:datos.CoinInfo.FullName,

                   } 
                    
                    
                    return objeto
                     
                   
            } )
                setCrypto(arraCrypto)
        }
        consultariAPI()

    },[])
 
     const  handleSubmit=(e)=>{
        e.preventDefault()
       if([moneda,cryptoMoneda].includes(''))
       {
         setError(true)
         return
       }
       setError(false)
       setMonedas({
        moneda,
       cryptoMoneda

       })
     }

  return (
    <>
           
            {error && <MensajeError/>} 
      

    
   
    <form
           onSubmit={handleSubmit}
    >
        <SelectMonedas/>
        <SelectCryptoMoneda/>
       

       <InputSubmit
          type="submit"
           value='Cotizar'
       
       />
 


    </form>
    </>
  )
}

export default Formulario