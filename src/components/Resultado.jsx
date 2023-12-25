import styled from "@emotion/styled"


const Label=styled.label`

font-family: 'Lato', sans-serif;
color:#FFF;
display:flex;
align-items:center;
gap:3rem;
margin-top:30px;

`
const Imagen=styled.img`
    
    display:block;
    width:100PX;
    

`
const Texto=styled.p`
    
    font-size:18px;
span{
   font-weight:200;
}    
 


`
const Precio=styled.p`
font-size:30px;
span{
   font-weight:700;
}    
 
`


const Resultado = ({cotizar}) => {

const{PRICE ,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE}=cotizar

 

  return (
    <Label>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen crypto'/>
         
         <div>
         <Precio>El Precio es de :<span>{PRICE}</span></Precio>
         <Texto>Precio mas Alto del Dia :<span>{HIGHDAY}</span></Texto>
         <Texto>Precio mas Bajo del Dia :<span>{LOWDAY}</span></Texto>
         <Texto>Variacion utimas 24 Horas :<span>{CHANGEPCT24HOUR}</span></Texto>
          <Texto>Ultima Actualizacion :<span>{LASTUPDATE}</span></Texto>
          </div>


    </Label>
  )
}

export default Resultado