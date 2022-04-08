import './App.css';
import { useState } from 'react';

// Header Component
function Header(props) {
    return (
        <header>
            <h1 className='mainTit'><a href='/'>{props.title}</a></h1>
        </header>
    );
}

// Nav Component
function Nav(props) {
    let navList = new Array();
    for(let idx=0;idx<props.임시이름.length;idx++){
        navList[idx] = <li><a href="#">{props.임시이름[idx].listTit}</a></li>;
    }
    return (
        <nav>
            <ol>
                {navList}
            </ol>
        </nav>
    );
}

// Section Component
function Section(props) {
    return (
        <section>
            <h2>{props.secTit}</h2>
            <p>
                {props.secTxt}
            </p>
        </section>
    );
}



function App() {
    let navLiTits = new Array(
        {listTit:'HTML'},
        {listTit:'CSS'},
        {listTit:'javaScript'}
    );
    return (  
        <div className='App'>
            <Header title="WEB"/>
            <Nav 임시이름={navLiTits}/>
            <Section secTit="WEB이란 무엇인가?" secTxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, velit facilis. Eligendi explicabo molestias perferendis blanditiis, deserunt est dignissimos temporibus repellendus similique ad iste veniam doloremque nobis? Animi, nihil ea.
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