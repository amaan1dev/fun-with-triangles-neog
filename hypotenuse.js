const inputs = document.querySelectorAll(".inputs-isTriangle");
const calculateBtn = document.querySelector("#calculate-btn");
const output = document.querySelector("#output-hypo")


function calculateSumOfSquares(a, b){
     const sumOfSquares = a*a + b*b;
     return sumOfSquares;
}

function calculateHypo(){
    
   const sumOfSquares = calculateSumOfSquares(Number(inputs[0].value), Number(inputs[1].value));

   const hypotenuseLength = Math.sqrt(sumOfSquares);

   output.innerText = "The length of the Hypotenuse is " + hypotenuseLength;
   
}

calculateBtn.addEventListener("click", calculateHypo)