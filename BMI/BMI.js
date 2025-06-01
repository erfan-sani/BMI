const weight = document.getElementById("weight");
const height = document.getElementById("height");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const marker = document.getElementById("marker");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    
    if (!weight.value || !height.value) {
        result.textContent = "Please enter both values";
        result.style.background = "#ffebee";
        return;
    }

    const bmi = (weight.value / (height.value ** 2)).toFixed(1);
    
    let msg = "";
    let color = "";
    let pos = 0;
    
    if (bmi < 18.5) {
        msg = "Underweight";
        color = "#e3f2fd";
        pos = (bmi / 18.5) * 25;
    } 
    else if (bmi < 25) {
        msg = "Normal";
        color = "#e8f5e9";
        pos = 25 + ((bmi - 18.5) / 6.5) * 25;
    } 
    else if (bmi < 30) {
        msg = "Overweight";
        color = "#fff8e1";
        pos = 50 + ((bmi - 25) / 5) * 25;
    } 
    else {
        msg = "Obese";
        color = "#ffebee";
        pos = 75 + ((Math.min(bmi, 40) - 30) / 10) * 25;
    }

    result.innerHTML = `
        <div style="font-size:24px; font-weight:bold;">${bmi}</div>
        <div>${msg}</div>
    `;
    result.style.background = color;
    
    marker.style.display = "block";
    marker.style.left = `${pos}%`;
});