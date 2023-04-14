import styled from "styled-components";

import Job  from './Job';
import Image from "./Img";
import Tags from "./Tags";


const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:start;
    align-items:center;
    transition:all 0.2s ;
    margin-top: 70px;
    height:100%;
    width:100%;
`

  const MiniContainer = styled.div`
        display:flex;
        flex-direction:row;
        border-radius: 0.5em;
        padding: 2.22em 2.78em;
          border-left: .33rem solid hsl(180deg 28% 48%);

        margin-top: 20px;
        background: #ffff;
        margin-top:20px;
        width: 1001px;
        height: 155px;
        color:wheat;
        @media (max-width: 821px ){
          flex-direction:column;
         
          width: 350px;
          height: 250px;
          padding:20px;
          margin-bottom:20px;

          
          }
      gap:20px;
        
  `
function Main  ({data,handlefilter})
{
  
  return( 
  <Container>
  {
  data.map(data=>
  <MiniContainer key={data.id}>
  <Image data={data} />
  <Job data={data} />
  <Tags data={data}
        Hhandlefilter={handlefilter}
       
        
  />
    
</MiniContainer>
)}
</Container> );
}


export default Main;