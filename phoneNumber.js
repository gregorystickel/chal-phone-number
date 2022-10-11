
function convertPhone (array){
array.splice(0,0,"(");
array.splice(4,0,")");
array.splice(5,0," ");
array.splice(9,0," ")
let result = array.join(''); 
return result;
};

console.log(convertPhone([1,2,3,4,5,6,7,8,9,0]))