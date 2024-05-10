let weightSlider = document.getElementById("myWeight");
let weightOutput = document.getElementById("inputWeight");

let heightSlider = document.getElementById("myHeight");
let heightOutput = document.getElementById("inputHeight");

weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;

weightSlider.oninput = function () {
    weightOutput.innerHTML = this.value;
}
heightSlider.oninput = function () {
    heightOutput.innerHTML = this.value;
}

function showValWeight(newVal) {
    weightSlider.value=newVal;
};

function showValHeight(newVal) {
    heightSlider.value=newVal;
};

weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);
function updateValueWeight(e) {
    weightOutput.value = e.srcElement.value;
}
function updateValueHeight(e) {
    heightOutput.value = e.srcElement.value;
}

function calculateBmi() {
    let weight = document.bmiForm.realweight.value;
    let height = (document.bmiForm.realheight.value)/100;
    let realbmi = (weight)/Math.pow(height, 2);
    let realbmiOutput = document.getElementById("yourbmi");
    let messageOutput = document.getElementById("evaluationMessage");
    let roundedBmi = realbmi.toFixed(1);
    messageOutput.innerHTML = "";
    realbmiOutput.innerHTML = " " + roundedBmi;
    if (roundedBmi <= 18.5) {
        messageOutput.innerHTML = "<h3>Underweight </h3><ul><li>Focus on nutrient-dense foods to increase calorie intake.</li><br><li>Incorporate healthy fats like avocados, nuts, seeds, and olive oil into your diet.</li><br><li>Include protein-rich foods such as lean meats, fish, eggs, dairy, legumes, and tofu.</li><br><li>Aim for regular meals and snacks throughout the day to support weight gain.</li><br><li>Consider strength training exercises to build muscle mass.</li></ul>";
    }
    else if (roundedBmi > 18.5 && roundedBmi <= 24.9 ) {
        messageOutput.innerHTML = "<h3>Healthy </h3><ul><li>Maintain a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats.</li><br><li>Engage in regular physical activity to support overall health and fitness.</li><br><li>Practice portion control and mindful eating to prevent weight gain.</li><br><li>Stay hydrated by drinking plenty of water throughout the day.</li><br><li>Prioritize getting enough sleep to support overall well-being.</li></ul>";
    }
    else if (roundedBmi >= 25.0 && roundedBmi <= 29.9) {
        messageOutput.innerHTML = "<h3>Overweight </h3><ul><li>Focus on gradual, sustainable weight loss through a combination of diet and exercise.</li><br><li>Incorporate more fruits, vegetables, and whole grains into your meals while reducing intake of processed foods and added sugars.</li><br><li>Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week, along with muscle-strengthening exercises on two or more days per week.</li><br><li>Keep track of your food intake and physical activity to identify areas for improvement.</li><br><li>Seek support from a healthcare professional or registered dietitian for personalized guidance.</li></ul>";
    }
    else if (roundedBmi >= 30.0) {
        messageOutput.innerHTML = "<h3>Obese </h3><ul><li>Set realistic weight loss goals and develop a comprehensive plan with the help of a healthcare provider or registered dietitian.</li><br><li>Focus on gradual, sustainable lifestyle changes rather than extreme diets or quick fixes.</li><br><li>Increase physical activity levels gradually, starting with low-impact exercises if necessary, and gradually progressing to more intense workouts.</li><br><li>Incorporate more plant-based foods, lean proteins, and healthy fats into your diet while reducing intake of high-calorie, low-nutrient foods.</li><br><li>Consider behavioral strategies such as mindful eating, stress management techniques, and social support to address emotional eating and other barriers to weight loss.</li></ul>";
    }
    
}