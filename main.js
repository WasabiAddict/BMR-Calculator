const calculateBtn = document.getElementById("btn");
const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calories = document.getElementById("calories");
const form = document.getElementById("form");
const units = document.querySelectorAll("input[name='measurement']");
const cm = document.getElementById('cm');
const kg = document.getElementById('kg');


/* Imperial Units
For men: 66.47 + (6.24 × weight in pounds) + (12.7 × height in inches) − (6.75 × age)
For women: 65.51 + (4.35 × weight in pounds) + (4.7 × height in inches) - (4.7 × age)
*/

//Metric Units
//BMR = 10 * weight + 6.25 * height - 5 * age + 5; male
//BMR = 10 * weight + 6.25 * height - 5 * age -161; female
const calculateBMR = function(weight, height, age, gender, measurement){
    if(gender == "male" && measurement =="metric") {
       return 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender == "female" && measurement == "metric") {          
        return 10 * weight + 6.25 * height - 5 * age - 161;
    } else if (gender == "male" && measurement == "imperial") {
        return 66.47 + 6.24 * weight + 12.7 * height - 6.75 * age;
    } else if (gender == "female" && measurement == "imperial") {
        return 65.51 + 4.35 * weight  + 4.7 * height - 4.7 * age;
    }
    
       
};


//calculate button click function
calculateBtn.addEventListener('click', function() {
    let genderValue = document.querySelector(".bmr-calculator form input[name='gender']:checked")?.value;
            if(!validation(genderValue)) {
                return;
            }
    let measurementValue = document.querySelector("input[name='measurement']:checked")?.value;
    let BMR = Math.max(calculateBMR(weight.value, height.value, age.value, genderValue, measurementValue),0);
            calories.innerHTML = Math.round(BMR).toLocaleString("en-us")
           if(BMR == 0) {
            alert("Your values are incorrect");
           }
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


//if imperial or metric is selected, show units respectively
for(const unit of units) {
    unit.onchange = () => {
        if (units[0].checked == true ) {
            kg.innerText = 'lbs';
            cm.innerText = 'in'
        }else{
            kg.innerText = 'kg';
            cm.innerText = 'cm';
        }
    }
}

