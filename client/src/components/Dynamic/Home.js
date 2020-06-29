import React, { useState, useEffect } from "react";
import getFacts from "./facts";

// const fact= facts[0];

 function Home(props) {
   const [count, setCount] = useState(0);
  //  let date3 = new Date().getTime();
  //  console.log(date3);

    console.log("From Home :D ", Date.now(), props.facts);
   
     const output = props.facts.map((fact, index) => {
       return <li
         key={index} >{fact.text}</li>
     });
   
   // console.log(getFacts().text);
  //  const facts = props.facts.map((fact,i) => {
  //    return <li key={i}>{fact}</li>
  //  });
  //  // const data = props.data;
  //  const noteList = [1,2,3,4,5];
  //  const noteList = facts;
   // console.log(data);
   
  //  console.log('from Home :D ', props.facts);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

   // Similar to componentDidMount and componentDidUpdate:

  // const data = facts;
  // console.log(data);

//   const table = data.map((fact, i) => {
//     return <li key={i}>{fact.text}</li>;
//   });

  return (<div><p style={{fontSize: 100}}>Hi</p>
   
      <p>You clicked {count} times</p>
      
      <button onClick={() => setCount(count +1) }>Click me</button>
    <div className={"firebase"}>
    <ul>
     {output}
    </ul>
    </div>
    
    </div>
    );
};

export default Home;