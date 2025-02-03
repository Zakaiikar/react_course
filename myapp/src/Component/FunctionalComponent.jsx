import React from "react"

const FuntionalComponent=()=>{
    const [data, SetData] = React.useState("react");
    console.log(data);
    return (
 
        <div>
            <p> this  is functional componenent </p>
        </div>
    )
}
export default FuntionalComponent