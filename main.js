const calculateBtn = document.getElementById("btn");
const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calories = document.getElementById("calories");
const form = document.getElementById("form");
const error = document.getElementById("error");


//BMR = 10 * weight + 6.25 * height - 5 * age + 5; male
//BMR = 10 * weight + 6.25 * height - 5 * age -161; female
const calculateBMR = function(weight, height, age, gender){
    if(gender == "male") {
       return 10 * weight + 6.25 * height - 5 * age + 5;
    } 
       return 10 * weight + 6.25 * height - 5 * age - 161;
};


//calculate button click function
calculateBtn.addEventListener('click', function() {
    let genderValue = document.querySelector(".bmr-calculator form input[name='gender']:checked")?.value;
            if(!validation(genderValue)) {
                return;
            }
    
    let BMR =  calculateBMR(weight.value, height.value, age.value, genderValue);

    calories.innerHTML = BMR.toLocaleString("en-us");

});


//input validation
function validation(genderValue) {
    if(age.value == '') { 
        alert('please enter age correctly');
        return false;
    } else if (weight.value ==''){
        alert('please enter weight correctly');
        return false;
    } else if (height.value == '') {
        alert('please enter height correctly');
        return false;
    } else if (genderValue === undefined) {
        alert('please check a gender');
        return false;
    };
    return true;
};
