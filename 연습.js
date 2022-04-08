{/* 
import './App.css';
import {useState} from 'react';

function Modal(props){
    return(
        <section>
            <h2>{props.title}</h2>
            <p>
                {props.content}
            </p>
        </section>
    );
}

function App(){
    let [btnNum, btnNumChange] = useState(0);
    let [제목, 제목변경] = useState(['HTML', 'CSS', 'javaScript']);
    let [내용, 내용변경] = useState(['aaa', 'bbb', 'ccc']);
    return(
        <div className="App">
            <button onClick={function(){
                btnNumChange(0);
            }}>벋흔1</button>
            <button onClick={function(){
                btnNumChange(1);
            }}>벋흔2</button>
            <button onClick={function(){
                btnNumChange(2);
            }}>벋흔3</button>
            <Modal title={제목[btnNum]} content={내용[btnNum]}/>
        </div>
    );
}
export default App;
*/}





/* state */
{/* 

import './App.css';
import {useState} from 'react';

function App(){
    let oldMode = ['html', 'css', 'javascript']
    let [mode, modeChange] = useState(oldMode);
    
    return(
        <div className='App'>
            <button onClick={function(){
                modeChange(oldMode);
            }}>벋흔</button>
            <ol>
                <li><a href="/" onClick={function(event){
                    event.preventDefault();
                    let newMode = [...mode];
                    newMode[0] = '에이치엠엘';
                    modeChange(newMode);
                }}>{mode[0]}</a></li>
                <li><a href="/" onClick={(event)=>{
                    event.preventDefault();
                    let newMode = [...mode];
                    newMode[1] = '시에스스';
                    modeChange(newMode);
                }}>{mode[1]}</a></li>
                <li><a href="/" onClick={function(e){
                    e.preventDefault();
                    let newMode = [...mode];
                    newMode[2] = '자바스트';
                    modeChange(newMode);
                }}>{mode[2]}</a></li>
            </ol>
        </div>
    );
}

export default App;
*/}





/* componant 등 */
{/* 
import './App.css';

// Header component
function Header(props) {
    return (
        <header>
            <h1 className="mainTit"><a href="/" onClick={(event)=>{
                event.preventDefault();
                props.onMsClick();  
            }}>{props.title}</a></h1>
        </header>
    );
}
// Nav component
function Nav(props) {
    let navList = new Array();
    // map문
    props.navTits.map((item)=>{
        // navList[idx] = <li><a href="#">{item.listTit}</a></li>;
        navList.push(
            <li key={item.itemNum}>
                <a id={item.itemNum} href={'/detail' + item.itemNum} onClick={function(event){
                    event.preventDefault();
                    props.onMsClick(event.target.id);
                }}>{item.listTit}</a>
            </li>
            );
    });
    // for문
    // for(let idx=0;idx<props.navTits.length;idx++){
    //     navList[idx] = <li><a href="#">{props.navTits[idx].listTit}</a></li>;
    // }
    return (
        <nav>
            <ol>
                {navList}
            </ol>
        </nav>
    );
}
// Section component
function Section(props) {
    return (
        <section>
            <h2>{props.secTit}</h2>
            <p>{props.secTxt}</p>
        </section>
    );
}

function App() {
    let navTit = new Array(
        {listTit:'HTML', itemNum:'01'},
        {listTit:'CSS', itemNum:'02'},
        {listTit:'javaScript', itemNum:'03'}
    );
    return (
        <div className="App">
            <Header title="WEB" onMsClick={()=>{
                console.log('Welcome')
            }}/>
            <Nav navTits={navTit} onMsClick={function(itemNum){
                alert(itemNum);
            }}/>
            <Section secTit="WEB이란 무엇인가" secTxt=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, velit facilis. Eligendi explicabo molestias perferendis blanditiis, deserunt est dignissimos temporibus repellendus similique ad iste veniam doloremque nobis? Animi, nihil ea.
                Quaerat, quo? Dolore harum explicabo est itaque laboriosam ducimus sequi quas eius nostrum, error ipsa esse odio ea totam tenetur, dolor fugit molestiae sed laborum commodi quos modi, officiis impedit.
                Architecto quas enim eaque, dolores voluptates labore placeat voluptatum ipsam facere provident repellat nobis voluptas vero expedita? Commodi, nostrum dolor. Obcaecati amet, praesentium iste expedita veritatis ab similique doloribus omnis!
                Nihil fugit ducimus ipsum, voluptatibus odio delectus inventore quo vero adipisci cum ullam accusantium rerum aperiam doloremque eius pariatur veritatis eveniet. Et aliquid saepe a ratione aspernatur? Voluptate, quisquam earum?
                Ex eius earum mollitia neque laudantium esse libero, qui nam incidunt quae voluptatem placeat officia rerum doloribus blanditiis pariatur aliquid inventore quisquam at, reprehenderit corrupti deleniti? Quo deleniti minus cum?
                Excepturi, odio dolorem sint cumque officiis nesciunt ea dicta, at, quia vel totam consectetur pariatur quasi repellat architecto a nam esse odit aut minima repellendus rem sapiente saepe? Explicabo, possimus!
                Similique deleniti quia alias quasi nesciunt itaque ad. Autem impedit voluptatum hic eius, unde, id fugit veniam nobis, aliquam voluptatibus ex praesentium architecto? Dignissimos, rerum? Eius sint voluptatum quae facere?
                Aut ea, esse, voluptatum placeat delectus earum incidunt aliquid quos perferendis commodi, tenetur ut. Consequatur delectus, facere cumque possimus dolorum nam repudiandae at aliquid non iste, temporibus ab aliquam excepturi.
                Cupiditate temporibus odit nihil sunt corporis autem, impedit rem magni corrupti repellat cumque sequi, voluptate explicabo delectus eveniet facere tempore sint voluptatem ex hic minus, nostrum ut? Tempore, amet voluptate.
                Quos magni laborum exercitationem excepturi tenetur adipisci aut obcaecati fugiat quas? Vitae tempora distinctio accusamus eos ullam cupiditate, quidem molestiae asperiores minus facere quas et provident corrupti iusto, dolorem nostrum!"/>
        </div>
    );
}

export default App;
*/}

