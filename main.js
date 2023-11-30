function calculateBMR() {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const weightUnit = document.getElementById('weightUnit').value;

    let heightInCm;
    const heightUnit = document.getElementById('heightUnit').value;

    if (heightUnit === 'cm') {
        heightInCm = parseFloat(document.getElementById('height').value);
    } else if (heightUnit === 'ft') {
        const heightFt = parseFloat(document.getElementById('heightFt').value);
        const heightIn = parseFloat(document.getElementById('heightIn').value);
        heightInCm = heightFt * 30.48 + heightIn * 2.54;
    } else {
        console.error('Invalid height unit'); // Optional: Provide an error message for debugging
        return; // Exit the function if the height unit is invalid
    }

    // Convert weight to kg if in lbs
    const weightInKg = (weightUnit === 'lbs') ? weight * 0.453592 : weight;

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

function updateHeightInputs() {
    const heightUnit = document.getElementById('heightUnit').value;
    const heightInputs = document.getElementById('heightInputs');

    // Check the selected unit and update the HTML structure
    if (heightUnit === 'ft') {
        heightInputs.innerHTML = `
            <input type="number" id="heightFt" placeholder="ft">
            <input type="number" id="heightIn" placeholder="in">
        `;
    } else {
        heightInputs.innerHTML = `<input type="number" id="height" placeholder="Enter height">`;
    }
}

function updateHeightPlaceholder() {
    const heightUnit = document.getElementById('heightUnit').value;
    const heightInputs = document.getElementById('heightInputs');

    if (heightUnit === 'ft') {
        heightInputs.innerHTML = `
            <input type="number" id="heightFt" placeholder="ft">
            <input type="number" id="heightIn" placeholder="in">
        `;
    } else {
        heightInputs.innerHTML = `<input type="number" id="height" placeholder="Enter height">`;
    }
}