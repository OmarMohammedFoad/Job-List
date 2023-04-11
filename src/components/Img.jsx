import styled from "styled-components";
const Imagee = styled.img`
          @media (max-width: 375px ) and (max-height: 667)  {
    flex-direction: column;
  }
     
`
 
const Image = (props)=>
{
return  (<Imagee src={props.data.logo} alt={props.data.company}></Imagee>)

}
export default Image;