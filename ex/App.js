import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import srcData from './srcData';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function SecContainer(props){
  return(
    <div className="container">
      {
        props.wear.map(function(item, idx, arr){
          return(
            <div className="card" style={{textAlign:'left'}} key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <p>{item.price}</p>
            </div>
          );
        })
      }
    </div>
  );
}

function Footer(props){
  return(
    <footer onClick={props.onClick}>
      푸터
    </footer>
  );
}

function Input(props){
  return(
    <input type="text" onChange={props.onChange}/>
  );
}

function App() {
  
  let [wear, wearChange] = useState(srcData);

  return (
    
      <div className="App">
        <header>
          <h1>제목</h1>
        </header>
        
        
          
            <section>
              <Input onChange={(e)=>{
                console.log(e.target.value); 
              }}/>
              <Button variant="primary">벋흔</Button>
              <SecContainer wear={wear}/>
            </section>
         
        
        
        <Footer onClick={()=>{
          alert('쌟땗');
        }}/>
      </div>
    
  );
}

export default App;







// function App() {
  
//   let [옷이름, 옷이름변경] = useState(['바지', '반바지', '티셔츠', '골뎅바지']);

//   function 옷이름배열변경함수(){
//     let 옷이름copy = [...옷이름];
//     옷이름copy[0] = '치마';
//     옷이름변경(옷이름copy);
//   }

//   function conPrint(){
//     console.log('이것은 함수의 호출입니다.');
//   }

//   return (
//     <div className="App">
//       <h1>{옷이름}</h1>
      
//       <button onClick={()=>{
//         옷이름배열변경함수(); conPrint();
//       }}>옷이름 변경</button>

//     </div>
//   );
// }

// export default App;
