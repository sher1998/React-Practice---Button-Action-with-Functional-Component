import React, { useState } from 'react';

// function display(){
//   return React.createElement('p',{id:"para"},"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.");;
// }
function Welcome() {
  
  let [x,display] = useState(null);
  // console.log(x);
  return <div>
    <button onClick= {() => display(x = <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)} id="click">click</button> ;
    {/* <p id="para">{x}</p> */ x}
    </div>
}

export default Welcome;
