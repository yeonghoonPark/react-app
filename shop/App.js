import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Data from './data';
import NavigationBar from './NavigationBar';
import Detail from './Detail';
import DetailPage from './DetailPage';
import StartPage from './StartPage';
import QnA from './QnA';
import FAQ from './FAQ';
import { useState } from 'react';

function App() {
  let [shoes, shoesChange] = useState(Data);
  let [viewCnt, viewCntChange] = useState(3);


  return (
    <div className="App">
     
      {/* NavigationBar */}
      <NavigationBar />   

      {/* StartPage */}
      <Route exact path="/">
        <StartPage shoes={shoes} viewCnt={viewCnt} viewCntChange={viewCntChange} />
      </Route>

      {/* Detail */}
      <Route exact path="/Detail">
        <Detail shoes={shoes}/>
      </Route>

      {/* DetailPage */}
      <Route exact path="/Detail/:id">
        <DetailPage shoes={shoes} />
      </Route>

      {/* QnA */}
      <Route exact path="/QnA">
        <QnA/>
      </Route>

      {/* FAQ */}
      <Route exact path="/FAQ">
        <FAQ />
      </Route>


    </div>
  );
}

export default App;
