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