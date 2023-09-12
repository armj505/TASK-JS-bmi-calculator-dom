function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });
  
  // You are going to write the code here before the curly braces 👇🏻
  height = height / 100
  console.log(height)
  let bmi = weight / height**2;
  console.log(bmi)
  window.alert(`Your BMI is ${bmi}`)
  if(bmi < 18.5){
    window.alert('You are Underweight')
  } else if(bmi >= 18.5 && bmi <= 24.9){
    window.alert('You are Healthy Weight')
  } else if(bmi >= 25.0 && bmi <= 29.9){
    window.alert('You are Overweight')
  } else if(bmi >= 30.0) {
    window.alert('You are Above Obesity')
  }
  if (age>=19 && age<=24 && bmi>=19 && bmi<=24){
    window.alert("Healthy")
  } else if (age>=25 && age<=34 && bmi>=20 && bmi <=25){
    window.alert("Healthy") 
  } else if (age>=35 && age<=44 && bmi>=21 && bmi <=26){
    window.alert("Healthy")
  } else if (age>=45 && age<=54 && bmi>=22 && bmi <=27){
    window.alert("Healthy")
  } else if (age>=55 && age<=64 && bmi>=23 && bmi <=28){
    window.alert("Healthy")
  } else if (age>=65 && bmi>=24 && bmi <=29){
    window.alert("Healthy")
  } else {window.alert("Not Healthy")}

}
