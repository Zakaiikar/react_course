import { useState } from "react";

const Form =()=>{
    const [course, setcourse] = useState("")
    const [desc, setdesc]= useState("")
    const [countery, setcountery]=useState("SOMALIA")
    const [aggrement, setaggrement]=useState(false)
    const handlechange=(event)=>{

        if(event.target.name==="course"){
            setcourse(event.target.value)
        }else if  (event.target.name==="desc"){
          setdesc(event.target.value)
        }else if  (event.target.name==="countery"){
            setcountery(event.target.value)
        } else if  (event.target.name==="aggrement"){
            setaggrement(event.target.checked)
        }
        
    
    }
    console.log(aggrement);
    return <div>
        <form action="">
            <input type="course" value={course} onChange={handlechange}/>
            <br/>
            <textarea name="desc" value={desc} onChange={handlechange}></textarea>
            <br />
            <select name="countery" value={countery} onChange={handlechange}> 
                <option value="usa">USA</option>
                <option value="CANADA">CANADA</option>
                <option value="GERMANY">GERMANY</option>
                <option value="HOLLAND">HOLLAND</option>
                <option value="SOMALIA">SOMALIA</option>
            </select>
            <br />
            <input type="checkbox" name="aggrement" checked={aggrement} onChange={handlechange} />
        </form>
    </div>
}
export default Form