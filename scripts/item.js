export default {} ;
function validateName(name){
    try {name === ""} throw new TypeError('Needs Name') } catch (e) {return name}