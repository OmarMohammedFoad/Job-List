import styled from "styled-components";


const Display= styled.div`
display:flex;

width:970px;
height: 65px;
z-index:1;
position:absolute;
border-radius: 10px;

top:60px;  
font-size:15px;
color: hsl(0, 12.499999999999948%, 90.58823529411765%);
background-color:#ffff;

@media  (max-width: 421px) {
   z-index:1;
  
   position: absolute;
   top:45px;  

    width:200px;
    height:auto;
    display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 5px;
   }

`

const Inside= styled.span`

text-align:center;
padding: 5px;
margin: 10px;
border-radius: 5px;

font-size:15px;
color: hsl(180, 29%, 50%);
background-color: #e7feff;
@media (max-width:376px) {
  
}



`
const Clear = styled.button`
color:#85bbbb;
border:white;
margin-left:auto;
margin-right:20px;
padding:10px;
background-color:white;
font-weight: bold;
@media (max-width:376px) {
   margin-left:auto;
}

`
const Icon = styled.button`
   background-color:#85bbbb;
   margin-left:10px;
   padding-right:20px;
   color:white;
   font-weight: bolder;
   border:none;

`



const Search  = (props)=>
 {
   
   
    return( 
      
   props.data.length === 0 ? <></>:  <Display>
      {props.data?console.log(true):console.log(false)}
       {props.data.map((d,indx)=><Inside key={indx}>{d} <Icon onClick={()=>props.clearone(indx)}>x</Icon> </Inside> )}
       <Clear onClick={()=>props.clear()}><u>Clear</u></Clear>
    </Display>)
}
export default Search;