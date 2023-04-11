import styled from "styled-components";
const Imagee = styled.img`
    
`
 
const Image = (props)=>
{
return  (<img src={props.data.logo} alt={props.data.company} />)

}
export default Image;