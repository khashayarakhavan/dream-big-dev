import axios from 'axios';
import React from 'react';

const  getFacts = async () => {
  const res = await axios.get("https://ssr-react.firebaseio.com/facts.json");
  console.log('Hello from Facts.js :D : ',res.data);
  // const text = res.data.map(fact => fact.text);

  return res.data;
}
export default getFacts;
