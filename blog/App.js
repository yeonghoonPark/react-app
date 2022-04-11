import './App.css';
import { useState } from 'react';

// Header Component
function Header(props) {
  return (
    <header className="black-header">
      <h1>{props.h1}</h1>
    </header>
  );
}

// Section Component
function Section(props) {

  let listItem = new Array();
  for (let idx = 0; idx < props.listContent.length; idx++) {
    listItem.push(
      <div className="list-item" key={idx}>
        <h2>
          <span id={idx} onClick={()=>{props.onModalOpen();props.onSetID();}} style={{cursor:'pointer'}}>{props.listTit[idx]}</span>
          <span onClick={() => { props.onMouseClick(idx, 1) }} style={{ cursor: 'pointer' }}>👍</span>
          <span onClick={() => { props.onMouseClick(idx, 2) }} style={{ cursor: 'pointer' }}>👎</span>
          <span>{props.best[idx]}</span>
        </h2>
        <p>2022-03-29</p>
        <p>{props.listContent[idx]}</p>
      </div>
    );
  }

  return (
    <section className="list">
      {listItem}
    </section>
  );
}

// Modal Component
function Modal(props) {
  return(
    <section className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <button onClick={props.onModalClose} style={{cursor:'pointer'}}>닫기</button>
        </div>
        <div className="modal-body">
          <div>{props.listTit}</div>
          <div>날짜</div>
          <div>{props.listContent}</div>
        </div>
      </div>
    </section>
  );
}


function App() {
  let [listTit, listTitChange] = useState(['서구청역 숨은 맛집', '연희동 추천 카페', '석남역 7호선 탑승긔']);
  let [listContent, listContentChange] = useState([
    '서구청역 숨은 맛집의 내용.서구청역 숨은 맛집의 내용.서구청역 숨은 맛집의 내용.서구청역 숨은 맛집의 내용.서구청역 숨은 맛집의 내용.서구청역 숨은 맛집의 내용.서구청역 숨은 맛집의 내용.',
    '연희동 추천 카페의 내용.연희동 추천 카페의 내용.연희동 추천 카페의 내용.연희동 추천 카페의 내용.연희동 추천 카페의 내용.연희동 추천 카페의 내용.연희동 추천 카페의 내용.',
    '석남역 7호선 탑승의 내용.석남역 7호선 탑승의 내용.석남역 7호선 탑승의 내용.석남역 7호선 탑승의 내용.석남역 7호선 탑승의 내용.석남역 7호선 탑승의 내용.석남역 7호선 탑승의 내용.'
  ]);
  let [best, bestChange] = useState([0, 0, 0]);
  let newBest = [...best];

  function bestValue(idx, para) {
    if (para == 1) {
      ++newBest[idx];
      bestChange(newBest);
    } else if (para == 2 && newBest[idx] > 0) {
      --newBest[idx];
      bestChange(newBest);
    }
  }

  let [modal, modalChange] = useState(false);
  let [viewIdx, viewIdxChange] = useState(0);

  return (
    <div className="App">
      <Header h1="React 블로그" />
      <Section 
        listTit={listTit} 
        listContent={listContent} 
        best={best} 
        onMouseClick={(value1, value2) => { bestValue(value1, value2) }} 
        onModalOpen={()=>{modalChange(true)}}
      />
      {
        modal == true
        ? <Modal 
            listTit={listTit} 
            listContent={listContent}  
            onModalClose={()=>{modalChange(false)}} 
            onSetID={(e)=>{viewIdxChange(e.target.id)}}
          />
        : null
      }
    </div>
  );
}

export default App;
