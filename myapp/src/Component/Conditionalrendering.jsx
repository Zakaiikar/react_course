import { useState } from "react";
const Conditionalrendering = () => {
  const [islogin, setislogin] = useState(false);
  const handleLogin = () => {
    setislogin(true);
  };
  const handleLogout = () => {
    setislogin(false);
  };

  let text = null;
  if(islogin){
    text="welcome user"
  } else {
    text="click for the login button to login"
  }
  return (
    <div>
        <p>{text}</p>
      {!islogin ? (
        <button onClick={handleLogin}>login</button>
      ) : (
        <button onClick={handleLogout}> logout</button>
      )}
    </div>
  );
};
export default Conditionalrendering;
