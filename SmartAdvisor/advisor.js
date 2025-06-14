const goalDropdown = document.getElementById('goal');
const formSection = document.getElementById('advisorForm');
const outputBox = document.getElementById('output');
const resultText = document.getElementById('resultText');

goalDropdown.addEventListener("change", () => {
    formSection.style.display = "block";
    outputBox.style.display = "none";
})

formSection.addEventListener("submit", (event) => {
    event.preventDefault();

    const initialAmount = parseFloat(document.getElementById("initial").value);
    const monthlyAdd = parseFloat(document.getElementById("monthly").value);
    const annualRate = parseFloat(document.getElementById("rate").value) / 100;
    const years = parseFloat(document.getElementById("years").value);
    const timesPerYear = 12; 

    const compoundPart = initialAmount * Math.pow(1 + annualRate/timesPerYear, timesPerYear * years);
    const monthlyPart = monthlyAdd * ((Math.pow(1 + annualRate/timesPerYear, timesPerYear * years) - 1) / (annualRate/timesPerYear));
    const futureValue = compoundPart + monthlyPart;

    resultText.innerText = `Estimated Future Value: $${futureValue.toFixed(2)}`;
    outputBox.style.display = "block";

})  