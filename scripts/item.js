export default {validateName, create} ;


let name = ""


function validateName(name){
try {  
   if (name.length === 0) {throw "Name Must Not Be Blank"
      }
   catch (err){
      //Block of code to handle errors
      }
   finally {
       create(name)
   }


function create(name){
    return{
        id: cuid(),
        name: 'name',
        checked: false;
    }
}
