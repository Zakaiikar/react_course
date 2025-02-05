import SubComponent from "./Component/SubComponent";
import ClassBasedComponent from "./Component/ClassBasedComponent";
import FuntionalComponent from "./Component/FunctionalComponent";
import Conditionalrendering from "./Component/Conditionalrendering";

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
     <Conditionalrendering/>
    </div>
  ); 
};

export default TestFunction;