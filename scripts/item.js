export default {validateName, create} ;
/* global cuid */
function validateName(name){
  try {
   
    let name = '';

    if (name.length === 0){
      throw TypeError('Name must not be blank');
    }
  }

    
  catch(err){
    console.log('Error: Blank Name');
  }
}

// function create(name){
//   return {
//     name: '',
//     checked: false
//   };
// }

function create(name){
  return {
    id: cuid(),
    name: name,
    checked: false,
  };
}