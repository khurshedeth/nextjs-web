import React from 'react'

function Child(props) {

  return (
    <div>

    <button onClick={()=>props.changeName("alam")}>changeName  </button>
    
    </div>

  )
}

export default Child