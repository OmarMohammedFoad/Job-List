import styled from 'styled-components';

const Display= styled.div`
display:flex;
flex-flow:column;
font-size:15px;
color: hsl(180, 29%, 50%);

`
const FirstMiniContainer = styled.div`
  display:flex;
  flex-flow:row;



`
const Company= styled.p`
color:#008080;
font-weight:700;
`
const New = styled.div`
border-radius:20px;
height:25px;
width:43px;
background-color:#008080;
color:white;
text-align:center;
margin-left:20px;
font-weight:bold;

`
const Featured = styled.div`
border-radius:20px;
height:25px;
width:80px;
background-color:#1c2c36;
color:white;
margin-left:20px;
text-align:center;
font-weight:bold;

`
const Position= styled.h6`
color:black;
font-weight:800;
`


const InsideList= styled.p`
font-weight:bold;
font-weight:200px;
font-size:small;
`
 
 
 const Job = (props)=>
{
        return <Display>

        <FirstMiniContainer>
        <Company>{props.data.company}</Company>  {props.data.new?<New>new!</New>:<></>}   {props.data.featured?<Featured>Featured</Featured>:<></>}
        
        </FirstMiniContainer>
        <Position>{props.data.position}</Position>
        
            <InsideList>
              {props.data.postedAt} · {props.data.contract} · {props.data.location}
            </InsideList>
        
        </Display> 
}
export default Job;