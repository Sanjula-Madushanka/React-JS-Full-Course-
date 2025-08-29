function getName(name){
    return name;
}


let a = false;
let b = true;

console.log(a || getName("sanjula madushanka"));

//Template literals

let name1 = "John";
let name2 = "Deo";

console.log(name1+" "+name2 , `${name1} ${name2}`);

//Ternary operator

const showRecipeOne = false;

function getRecipeOneName(recipeName){
    return recipeName;
}

function getRecipeTwoName(recipeName){
    return recipeName;
}

if (showRecipeOne){
    console.log(getRecipeOneName("Pizza"));
}else{
    console.log(getRecipeTwoName("coke"));
}

showRecipeOne
 ? console.log(getRecipeOneName("Pizza")) 
 : console.log(getRecipeTwoName("coke"));


//Object and array destructuring

const id ="1";
const productName = "Laptop";
const rating = 4;

const product ={
    id :id,
    productName : productName,
    rating : rating
}

console.log(product);

const product2={
    discription :"product two discription",
    id,
    productName,
    rating  
}

//const getProductTwoDiscription= product2.discription;

//console.log(getProductTwoDiscription);

const {discription}=product2;

console.log(discription);




const array=[1,2,3];

let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];
let getArrayThirdValue = array[2];

console.log(getArrayFirstValue , getArraySecondValue);

const[arrayFirstValue,arraySecondValue,arrayThirdValue]=array;

console.log(arrayFirstValue , arraySecondValue, arrayThirdValue);
