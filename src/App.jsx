import {useState} from "react";
import {useEffect} from "react";

function App() {

    const [advice , setAdvice ] = useState("");
    const [count , setCount] = useState(0);


    async function getAdvice(){
        const res = await fetch('https://api.adviceslip.com/advice\n')
        const data = await res.json()
        setAdvice(data.slip.advice)
        setCount((c)=> c +1)
    }
    useEffect(function (){
       getAdvice();
    },[]);

    return (

        <div>
            <h2>{advice}</h2>
            <button onClick={getAdvice}>get Advice</button>
            <Message count =  {count} />
        </div>
    );
}
function Message(props){
    return (
       <p>
           you have read <strong>{props.count}</strong> advices !
       </p>
    )
}
export default App;
