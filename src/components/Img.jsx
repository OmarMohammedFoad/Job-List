
 import styled from "styled-components";
 const Images = styled.img`
   @media (max-width: 821px) {
    width:70px;
    position:relative;
    bottom:40px;
    z-index:1;
   }
   
 `
const Image = (props)=>
{
return  (<Images src={props.data.logo} alt={props.data.company} />)

}
export default Image;