import SubComponent from "./Component/SubComponent";
import ClassBasedComponent from "./Component/ClassBasedComponent";
import FuntionalComponent from "./Component/FunctionalComponent";
import Conditionalrendering from "./Component/Conditionalrendering";
import List from "./Component/List";
import Counterapp from "./Component/Counterapp";

const TestFunction = () => {
  
  return (
    <div>
      {/* <p>
        Welcome to the RouteComponent
      </p>
      <SubComponent>  
        this is children
     </SubComponent>
     <ClassBasedComponent />
     <FuntionalComponent/> */}
     {/* <Conditionalrendering/> */}
     <Counterapp></Counterapp>
     {/* <List/> */}
    </div>
  ); 
};

export default TestFunction;