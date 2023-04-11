import styled from "styled-components";


const Display= styled.div`
display:flex;
flex-flow:row;
width:970px;
height: 65px;
z-index:1;
position: absolute;
border-radius: 10px;
bottom:500px;  
align-items:center;
font-size:15px;
color: hsl(0, 12.499999999999948%, 90.58823529411765%);
background-color:#ffff;

`

const Inside= styled.span`

text-align:center;
padding: 5px;
margin: 10px;
border-radius: 5px;

font-size:15px;
color: hsl(180, 29%, 50%);
background-color: #e7feff;

`
const Clear = styled.button`
color:#85bbbb;
border:white;
margin-left:auto;
margin-right:20px;
padding:10px;
background-color:white;
font-weight: bold;

`
const Icon = styled.button`
   background-color:#85bbbb;
   margin-left:10px;
   padding-right:20px;
   align-content: center;
   color:white;
   font-weight: bolder;
   border:none;

`



const Search  = (props)=>
 {
   
   
    return( 
    <Display>
      
       {props.data.map((d,indx)=><Inside key={indx}>{d} <Icon onClick={()=>props.clearone(indx)}>x</Icon> </Inside> )}
       <Clear onClick={()=>props.clear()}><u>Clear</u></Clear>
    </Display>)
}
export default Search;