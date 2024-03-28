

document.addEventListener("DOMContentLoaded", function() {
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll("button");
  let output = "";

  
  function appendToDisplay(value) {
      output += value;
      display.value = output;
  }

  
  function operation(operator) {
      output += operator;
      display.value = output;
  }

  
  function clearDisplay() {
      output = "";
      display.value = output;
  }

  
  function calculate() {
      try {
          output = eval(output);
          display.value = output;
      } catch (error) {
          display.value = "Error";
      }
  }

  
  buttons.forEach(button => {
      button.addEventListener("click", (event) => {
          const value = event.target.dataset.value || event.target.textContent;
          if (value === "AC") {
              clearDisplay();
          } else if (value === "DEL") {
              output = output.slice(0, -1);
              display.value = output;
          } else if (value === "%") {
              appendToDisplay("%");
          } else if (value === "/") {
              operation("/");
          } else if (value === "=") {
              calculate();
          } else {
              appendToDisplay(value);
          }
      });
  });
});
