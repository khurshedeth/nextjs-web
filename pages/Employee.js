import React from 'react'

function Employee(props) {
  const{firstName,lastName,age} = props;

  return (
    <div>
    <div>Employee Name: {firstName} {lastName} who is age {age}</div>
    </div>
  )
}

export default Employee