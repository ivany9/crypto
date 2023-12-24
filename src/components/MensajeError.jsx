import styled from "@emotion/styled"



const Errores=styled.div`
    
background-color:#B7322C;
font-size:15px;
color:#FFF;
font-family: 'Lato', sans-serif;
padding:14px;
font-weight:700;
text-align:center;
`



const MensajeError = () => {
  return (
        
   <Errores>
   Todos los campos son Obligatorios
</Errores>
  



       )
      

}

export default MensajeError


