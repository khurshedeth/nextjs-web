import React from 'react'
import Employee from './Employee'

const employeeInfo=[
  {
  firstName:'Khurshed',
  lastName:'Alaam',
  age:'23',
  employeeId:'1'
  },
  {
    firstName:'Nasim',
    lastName:'Akhtar',
    age:'26',
    employeeId:'2'
    },
    {
      firstName:'Vivek',
      lastName:'Yadav',
      age:'25',
      employeeId:'3'
      },
      {
        firstName:'Vipin',
        lastName:'Bedardi',
        age:'26',
        employeeId:'4'
        },

        {
          firstName:'Amrendra',
          lastName:'Bahubali',
          age:'25',
          employeeId:'4'
          }
    
]


function App() {

  return (
<>
  <h1>Employee detail</h1>)
{employeeInfo.map((Employee )=>{
//const {firstName,lastName,age}= props;
return(
  <Employee  key={Employee.employeeId} {...Employee} />


);
})}

  



  
 </>
  )}
  

export default App