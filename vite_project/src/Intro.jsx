import './Intro.css';
// function Intro(props){
//     return (
//         <div className='Fi'>
//             <h2>Introduction</h2>
//             <h3>My name is {props.name}, student of software engineering.</h3>

//             <h2>Aims</h2>
//             <h3>Master the {props.aim} concepts</h3>
//         </div>
//     );
// }

// second way

function Intro({name,aim}){
    return (
        <div className='Fi'>
            <h2>Introduction</h2>
            <h3>My name is {name}, student of software engineering.</h3>

            <h2>Aims</h2>
            <h3>Master the {aim} concepts</h3>
        </div>
    );
}

export default Intro;