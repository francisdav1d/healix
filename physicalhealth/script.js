document.getElementById('workoutRoutineBtn').addEventListener('click', showWorkoutRoutine);
document.getElementById('muscleGroupBtn').addEventListener('click', showMuscleGroupExercise);
document.getElementById('fitnessGoalBtn').addEventListener('click', showFitnessGoal);
document.getElementById('bmiCalculatorBtn').addEventListener('click', showBMICalculator);

function showWorkoutRoutine() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Weekly Gym Workout Routine</h2>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Workout</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Monday</td>
                    <td>Chest and Triceps</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>Back and Biceps</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>Legs</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>Shoulders and Abs</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>Full Body</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>Cardio</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>Rest</td>
                </tr>
            </tbody>
        </table>
    `;
}

function showMuscleGroupExercise() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Muscle Group Exercise</h2>
        <p>Select a muscle group and your experience level:</p>
        <select id="muscleGroup">
            <option value="chest">Chest</option>
            <option value="back">Back</option>
            <option value="legs">Legs</option>
            <option value="arms">Arms</option>
            <option value="shoulders">Shoulders</option>
        </select>
        <select id="experienceLevel">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
        </select>
        <button onclick="suggestExercise()">Suggest Exercise</button>
        <div id="exerciseResult"></div>
    `;
}

function suggestExercise() {
    const muscleGroup = document.getElementById('muscleGroup').value;
    const experienceLevel = document.getElementById('experienceLevel').value;
    const exerciseResult = document.getElementById('exerciseResult');
    
    let exercise, weight, reps, sets;
    
    if (muscleGroup === 'chest') {
        exercise = 'Bench Press';
    } else if (muscleGroup === 'back') {
        exercise = 'Pull-Ups';
    } else if (muscleGroup === 'legs') {
        exercise = 'Squats';
    } else if (muscleGroup === 'arms') {
        exercise = 'Bicep Curls';
    } else if (muscleGroup === 'shoulders') {
        exercise = 'Shoulder Press';
    }
    
    if (experienceLevel === 'beginner') {
        weight = 'Light';
        reps = 12;
        sets = 3;
    } else if (experienceLevel === 'intermediate') {
        weight = 'Medium';
        reps = 10;
        sets = 4;
    } else if (experienceLevel === 'expert') {
        weight = 'Heavy';
        reps = 8;
        sets = 5;
    }
    
    exerciseResult.innerHTML = `
        <p>Exercise: ${exercise}</p>
        <p>Weight: ${weight}</p>
        <p>Reps: ${reps}</p>
        <p>Sets: ${sets}</p>
    `;
}

function showFitnessGoal() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Fitness Goal</h2>
        <p>Enter your current weight and goal weight:</p>
        <input type="number" id="currentWeight" placeholder="Current Weight (kg)">
        <input type="number" id="goalWeight" placeholder="Goal Weight (kg)">
        <button onclick="calculateGoal()">Calculate Goal</button>
        <div id="goalResult"></div>
    `;
}

function calculateGoal() {
    const currentWeight = parseFloat(document.getElementById('currentWeight').value);
    const goalWeight = parseFloat(document.getElementById('goalWeight').value);
    const goalResult = document.getElementById('goalResult');
    
    const weightDifference = Math.abs(goalWeight - currentWeight);
    const weeksToGoal = weightDifference / 0.5; // Assuming weight loss/gain of 0.5kg per week
    
    goalResult.innerHTML = `
        <p>Weight Difference: ${weightDifference} kg</p>
        <p>Estimated Time to Reach Goal: ${weeksToGoal} weeks</p>
    `;
}

function showBMICalculator() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>BMI Calculator</h2>
        <p>Enter your height and weight:</p>
        <input type="number" id="height" placeholder="Height (cm)">
        <input type="number" id="weight" placeholder="Weight (kg)">
        <button onclick="calculateBMI()">Calculate BMI</button>
        <div id="bmiResult"></div>
    `;
}

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const bmiResult = document.getElementById('bmiResult');
    
    const bmi = (weight / (height * height)).toFixed(2);
    let category, idealWeightRange;
    
    if (bmi < 18.5) {
        category = 'Underweight';
        idealWeightRange = `${(18.5 * height * height).toFixed(2)} - ${(24.9 * height * height).toFixed(2)} kg`;
    } else if (bmi < 24.9) {
        category = 'Normal weight';
        idealWeightRange = `${(18.5 * height * height).toFixed(2)} - ${(24.9 * height * height).toFixed(2)} kg`;
    } else if (bmi < 29.9) {
        category = 'Overweight';
        idealWeightRange = `${(18.5 * height * height).toFixed(2)} - ${(24.9 * height * height).toFixed(2)} kg`;
    } else {
        category = 'Obese';
        idealWeightRange = `${(18.5 * height * height).toFixed(2)} - ${(24.9 * height * height).toFixed(2)} kg`;
    }
    
    bmiResult.innerHTML = `
        <p>BMI: ${bmi}</p>
        <p>Category: ${category}</p>
        <p>Ideal Weight Range: ${idealWeightRange}</p>
    `;
}