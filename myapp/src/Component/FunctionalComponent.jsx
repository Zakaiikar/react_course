import React from "react"

const FuntionalComponent=()=>{
    const [data, SetData] = React.useState("react");
    // setstate(Vue)
    // const [data] = React.useState("react");
    // console.log(data);
    const handleclick=(course, price)=>{
        console.log(price);
        SetData(course)
    }
    return (
 
        <div>
            <p> this  is functional componenent </p>
           
            <button type="button" onClick={()=>handleclick("angular",10)}>click me</button>
            <p>State: {data}</p>
        </div>
    )
}
export default FuntionalComponent