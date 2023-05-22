import { useState } from "react";
import "./App.css";
import InputArea from "./components/InputArea";
import DiaryItem from "./components/DiaryItem";

function App() {

  const [items,setItems] = useState([]);


  const addItems=(inputTextValue)=>{
    setItems((prevItems)=>{
      return [...prevItems,inputTextValue];
    } );
  }

  
  const deleteItem =(id)=>{
    setItems((prevItems)=>{
      return prevItems.filter((item,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h2>My Dairy</h2>
      </div>
      <InputArea addItems={addItems} />
      <div>
        <ul>
          {
            items.map((item,index)=>{
              return (
                <DiaryItem key={index} text={item} deleteItem={deleteItem} id={index} />
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
