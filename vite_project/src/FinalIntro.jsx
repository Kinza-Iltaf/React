import Intro from './Intro.jsx';


function FinalIntro(){
  let arr = ["kinza","Fatime", "Ayesha"]
  let arr2 ={a :"kin", b : "atiqa"}
    return(
      <>
    <Intro name="kinza" aim="React" arr= {arr}  arr2 ={arr2}/>
    <Intro  name="kinza" aim="React" arr= {arr} />
    <Intro  name="kinza" aim="React" arr= {arr}/>
      </>
    )
}

export default FinalIntro;