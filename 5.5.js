function removeChars(text, charsToRemove) {
    return [...text].filter(char => !charsToRemove.includes(char)).join('');
  }

  const userInput = prompt("Введіть рядок: hello world");
  const charsInput = prompt("Введіть символи для видалення через кому (l,d):");

  const charsArray = charsInput.split(',').map(char => char.trim());

  const result = removeChars(userInput, charsArray);

  alert("Результат: " + result);
