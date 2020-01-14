export default {validateName, create} ;

function validateName(name){
try {
   
    let name = ''

    if (name.length === 0){
        throw TypeError('Name must not be blank')}}
    
catch(err){
        console.log('Error: Blank Name')}
    }

function create(name){
    return
    {id: cuid(),
    name: '',
    checked: false}};