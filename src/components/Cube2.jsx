
const Cube2 = (props) => {
   
    return (
      <>
      <div className="flex flex-col items-center justify-center mx-2 my-4 space-y-2 text-white">
        <div className="my-4"> <img src="/box.svg"  width={50} height={50} alt="box"/></div>
        <p className="text-xl font-bold">{props.name}</p>
        <p>{props.disp}</p>
        </div> 
      </>
    )
  }
  
  export default Cube2
  