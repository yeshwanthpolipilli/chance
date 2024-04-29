import React ,{useState} from 'react'
function State() 

{
    const[text,setText]=useState('my name is yesh')

  const [color, setColor]=useState({
    backgroundColor: "black",
    color:"white"
  })



   const yesh =() =>
   {
   let newtext=text.toUpperCase();
    setText(newtext)
    setColor({background:"black", color:"white"})
   

   }
   const yesh1 =() =>
   {
   let newtext=text.toLowerCase();
    setText(newtext)
    setColor({background:"white", color:"black"})
   }
   const change =(e) =>
   {

    setText(e.target.value)
    
   }
  return (
   <>
   <div className="container">
   <textarea name=" "  value={text} style={color} id="my box" onChange={change} cols="50" rows="8"></textarea>
   </div>
   <button  className='btn btn-success'onClick={yesh}>convert to Uppercase</button>
   <button  className='btn btn-success mx-3'onClick={yesh1}> convert to LowerCase</button>
   <div>
   
</div>

   </>
  )
}

export default State
