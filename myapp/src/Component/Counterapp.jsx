import { useState } from "react";

const Counterapp = () => {
  const [counter, setcounter] = useState(0);
  const handlereducer = () => {
    setcounter((oldcounter)=>(oldcounter -1
    ))
  };
  const handleadd = () => {
    setcounter((oldcounter)=>( oldcounter +1
    ))
  };
  return (
    <div>
    {counter>0  ? <button onClick={handlereducer}>-</button> : null}
      <span>{counter}</span>
      <button onClick={handleadd}>+</button>
    </div>
  );
};
export default Counterapp;
