

import React from 'react';
import Header from "./components/Header"
import Main from './components/Main';
import Data from "./data.json"
import { useState } from 'react';
import Search from './components/Search';
import {Row,Column} from 'simple-flexbox';
import styled from 'styled-components';

  const All = styled.div`
    @media (max-width: 375px) {
     

      .Search{
        display:flex;
        width:375;
      }
    }
  `




function App() {

  const [filter,setFilter] = useState([])

  const filters = ({role,level,languages,tools})=>
  {    
    if(filter.length===0){
      return true;
    }
    const tags = [role,level];
    if(languages)
    {
      tags.push(...languages)
    }
    if(tools)
    {
      tags.push(...tools)
    }
    
    return filter.every((tag)=>tags.includes(tag))
  }



  const Handlefilter = (tag)=>
  {
    setFilter([...filter,tag])
  }

  const CLearAll = ()=>
  {
    filter.splice(0,filter.length)
    
    setFilter([...filter])
  }
  

  const CLearOne = (indx)=>
  {
    if(indx>-1)
    {
      filter.splice(indx,1)
    }
    
    setFilter([...filter])
  }
  

  

  const filteredJobs = Data.filter(filters)

  return (
    <All>
    <Column flexGrow={1} >
    <Row  horizontal='center'>
     <Header/>
    </Row>
    <Row vertical='center'>
      <Column flexGrow={1} horizontal='center'>
        <Search  data={filter} clear={CLearAll}  clearone={CLearOne}  />
        <Main data={filteredJobs}
              handlefilter={Handlefilter}
             
            
              
              
        />
      </Column>
    </Row>
  </Column>
  </All>
  );
}

export default App;
