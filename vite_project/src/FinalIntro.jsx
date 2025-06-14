import Intro from './Intro.jsx';


function FinalIntro(){
  let arr = [<li>"kinza" </li>,"Fatime", "Ayesha"];
  let arr2 = {a:"programmer", b: "coder"};

    return(
      <>
    <Intro name="kinza" aim="React" arr= {arr} arr2={arr2} />
    <Intro  name="kinza" aim="React" arr= {arr} arr2={arr2} />
    <Intro  name="kinza" aim="React" arr= {arr} arr2={arr2}/>
      </>
    )
}

export default FinalIntro;