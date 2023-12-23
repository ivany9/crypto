
import styled from '@emotion/styled';
import { useState } from 'react';




const Label=styled.label`

font-family: 'Lato', sans-serif;
color:#FFF;
display:block;
font-size:24px;
font-weight:700;
margin:15px 0;

`
const Select=styled.select`
 
 font-family: 'Lato', sans-serif;
 width:100%;
 font-size:18px;
 padding:14px;
 border-radius:10px;
 margin-bottom: 20px;
 text-align:center;


`
const useSelectMonedas = (label,monedas) => {
 
    const [select,useSelect]=useState('')


    


const Impresion=()=>(
    <>
       <Label>{label}</Label>
  <Select
                    value={select}
                    onChange={e=>useSelect(e.target.value)}>
     <option       
     value=''>Selecciones </option>
          {monedas.map(opcion=>(
            <option
                       key={opcion.id}
                       value={opcion.id}>{opcion.nombre} </option>
            
               ))}

       </Select>
 
   </>

)



return [select,Impresion]
}

export default useSelectMonedas