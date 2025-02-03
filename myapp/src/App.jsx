import SubComponent from "./Component/SubComponent";
import ClassBasedComponent from "./Component/ClassBasedComponent";
import FuntionalComponent from "./Component/FunctionalComponent";

const TestFunction = () => {
  
  return (
    <div>
      <p>
        Welcome to the RouteComponent
      </p>
      <SubComponent>  
        this is children
     </SubComponent>
     <ClassBasedComponent />
     <FuntionalComponent/>
    </div>
  ); 
};

export default TestFunction;