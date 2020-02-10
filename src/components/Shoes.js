import React from 'react';


function Shoes(props){
  return(
    <>
   
 
     <li key={props.shoe.id}> 
     <p>{props.shoe.name}</p>
     <button onClick={() => props.onDelete(props.shoe)}>Delete</button>
     </li>
    </>
  ) 
}
export default Shoes;

