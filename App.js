import './App.css';

// Header 함수 component 생성
function Header(props){
  return <header>
            <h1><a href="#">{props.tit}</a></h1>
         </header>
}
// Nav 함수 component 생성
function Nav(props){
  let navList = new Array();
  for(let idx=0;idx<props.navTits.length;idx++){
    navList.push(<li key={idx}><a href='#'>{props.navTits[idx].tit}</a></li>);
    // navList[idx] = <li key={idx}><a href='#'>{props.navTits[idx].tit}</a></li>
  }
  return <nav>
          <ul>
            {navList}
          </ul>
        </nav>
}
// Article 함수 component 생성
function Article(props){
  return <article>
          <h2>{props.tit}</h2>
          <p>{props.txt}</p>
        </article>
}

function App() {
  let navTit = new Array(
    {tit:'HTML'},
    {tit:'CSS'},
    {tit:'javaScript'}
  );
  return (
    <div className="App">
      <section className="wrap">
        <Header tit="'WEB'이라는 문자개체로 넘어간다"/>
        <Nav navTits={navTit}/>
        <Article tit="WEB" txt="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세"/>
      </section>
    </div>
  );
}

export default App;
