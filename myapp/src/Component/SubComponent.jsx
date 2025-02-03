// eslint-disable-next-line react/prop-types
const SubComponent=({children})=>{
  console.log(children);
  return (
    <div>
        <p> This is Sub componenent</p>
        <span>{children}</span>
    </div>
  )
}
export default SubComponent;