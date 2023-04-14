import styled from "styled-components";
const LangTool = styled.button`
  height:25px;
  width:80px;
  border:none;
  margin:10px;
  background-color: hsl(180, 28.971962616822438%, 79.01960784313725%);
  color:white;
  /* display:flex;
  flex-flow:row; */
  color: #008080;
  justify-content:center;
  font-size:small;
  font-weight:bold;
  
`
const ToolLangss = styled.div`
  display:flex;
  flex-flow:row;
  @media (max-width: 376px) {
    display:grid;
    position: relative;
    bottom:80px;
    right:20px;
    grid-template-columns: auto auto auto;
    
  }

  margin-left:auto;

`

const Tags = ({data:{level,role,languages,tools},Hhandlefilter},)=>
{
  
  
    const Langtool = [role,level];
    if(tools)
    {
      Langtool.push(...tools)
    }
    if(languages)
    {
      Langtool.push(...languages)
    }
  
    return(<ToolLangss> 

  
        
          {Langtool.map((d,index)=>
            <LangTool key={index} onClick={()=>Hhandlefilter(d)}>{d}</LangTool>
          )}
        
      
      </ToolLangss>)
}
export default Tags;