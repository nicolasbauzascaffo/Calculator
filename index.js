/* CALCULADORA SIMPLE:
- Se establecen las variables de display y botón.
- Luego se lanza un evento 'Click' por cada uno de los botones.
- Se lanza un try/catch ( eval() toma un argumento que es una cadena de texto y la evalúa como si fuera código JavaScript),
de lo contrario lanza un error.
- all-clear borra todos los valores.
- de borra cada número o símbolo en el display y de ser así borra símbolo a símbolo o dígito a dígito.
- de lo contrario se ejecuta la operación matemática  */

const display = document.getElementById("display");
const boton = document.querySelectorAll("button");

boton.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "=") {
      try {
        let result = eval(display.value);
        let bigResult = new Big(result);
        display.value = bigResult.toFixed(2);
      } catch (error) {
        display.value = "Syntax ERROR";
      }
    } else if (btn.id === "all-clear") {
      display.value = "";
    } else if (btn.id === "de") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += btn.id;
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "Enter") {
    try {
      let result = eval(display.value);
      let bigResult = new Big(result);
      display.value = bigResult.toFixed(2);
    } catch (error) {
      display.value = "Syntax error";
    }
  } else if (key === "Backspace" || key === "Delete") {
  } else if (key === "Escape") {
    display.value = display.value.slice(0, -1);
  } else if (
    !isNaN(key) ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/"
  ) {
    display.value += key;
  }
});
