
import SubComponent from "./Component/SubComponent";
import ClassBasedComponent from "./Component/ClassBasedComponent";
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
    </div>
  );
};

export default TestFunction;