import './index.css'
import {Container} from "react-bootstrap"
import NavBar from "./Components/NavBar";
import Title from "./Components/Title";
import Category from "./Components/Category";
import { items } from './Data';
import { useState } from 'react';
import CardList from './CardList';

function App() {

  const [itemsData,SetItemsData]=useState(items)
// Get all cat unque
  const allCategory = ["All", ...new Set (items.map((i)=>i.category))] // [...new Set (....)] to prevent repetetion//
  console.log(allCategory)

  // Filter by Category
  const filterByCategory = (cat)=>{
    if(cat==="All"){
      SetItemsData(items)

    }else{
const newArray = items.filter((item)=> item.category === cat)
SetItemsData (newArray)
  }
}
// Filter by Search 
const filterBySearch = (word)=>{
  if(word !== ""){
const newArray = items.filter((item)=> item.title === word)
SetItemsData (newArray)
}
}

  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch}/>
      <Container>
     <Title/>
     <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
     <CardList itemsData={itemsData}/>
      </Container>
    </div>
  );
}

export default App;
