function calculateBMR() {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const weightUnit = document.getElementById('weightUnit').value;
    const heightUnit = document.getElementById('heightUnit').value;

    // Convert weight to kg if in lbs
    const weightInKg = (weightUnit === 'lbs') ? weight * 0.453592 : weight;

    // Convert height to cm if in ft
    const heightInCm = (heightUnit === 'ft') ? height * 30.48 : height;

    // BMR calculation 
    const bmr = calculateActualBMR(weightInKg, heightInCm, age, gender);

    document.getElementById('result').innerHTML = `Your BMR is: ${bmr.toFixed(2)} calories per day`;
}

function calculateActualBMR(weightInKg, heightInCm, age, gender) {
    
    if (gender === 'male') {
        return 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
    } else if (gender === 'female') {
        return 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;
    } 
}

function updateWeightPlaceholder() {
    const weightUnit = document.getElementById('weightUnit').value;
    const weightInput = document.getElementById('weight');
    weightInput.placeholder = `Enter weight (${weightUnit})`;
}

function updateHeightPlaceholder() {
    const heightUnit = document.getElementById('heightUnit').value;
    const heightInput = document.getElementById('height');
    heightInput.placeholder = `Enter height (${heightUnit})`;
}