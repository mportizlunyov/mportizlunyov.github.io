/*
Mikhail P. Ortiz-Lunyov (mportizlunyov)

  GitLab repository: https://github.com/mportizlunyov/mportizlunyov.github.io
  Licensed uncder Creative Commons Zero
*/

// Method to return Spanish-language description
function printEngLangDescription() {
  let toReturn = "";
  toReturn = toReturn.concat("Hello!\n");
  toReturn = toReturn.concat("\n");
  toReturn = toReturn.concat("My name is Mikhail Ortiz-Lunyov!\n");
  toReturn = toReturn.concat("\n");
  toReturn = toReturn.concat("I am a second-year undergraduate student at UW-Madison,\n");
  toReturn = toReturn.concat("  double majoring in Computer Science and Psychology.\n");
  toReturn = toReturn.concat("\n");
  toReturn = toReturn.concat("My professional goal is to work in cybersecurity,\n");
  toReturn = toReturn.concat("  particularly in blue teams.\n");
  toReturn = toReturn.concat("\n");
  return toReturn;
}

// Method to return Spanish-language description
function printSpaLangDescription() {
  let toReturn = "";
  toReturn = toReturn.concat("¡Hola!\n");
  toReturn = toReturn.concat("\n");
  toReturn = toReturn.concat("¡Mi nombre es Mikhail (Miguel) Ortíz-Lunyov!\n");
  toReturn = toReturn.concat("\n");
  toReturn = toReturn.concat("Yo soy en mi segundo año como un estudiente en UW-Madison,\n");
  toReturn = toReturn.concat("  haciendo un doble-especialización en Siencias de Computadores y Psicología.\n");
  toReturn = toReturn.concat("\n");
  toReturn = toReturn.concat("Mi objetivo profesional es trabajar en cibersecuridad,\n");
  toReturn = toReturn.concat("  particularmente en los equipos azúles.\n");
  toReturn = toReturn.concat("\n");
  return toReturn;
}

// Method to return Russian-language description
function printRusLangDescription() {
  let toReturn = "";
  toReturn = toReturn.concat("Здравствуйте!\n");
  toReturn = toReturn.concat("\n");
  toReturn = toReturn.concat("Меня зовут Михаил Ортиз-Лунёв!\n");
  toReturn = toReturn.concat("\n");
  toReturn = toReturn.concat("Я во второвам курсе в UW-Мадисоне,\n");
  toReturn = toReturn.concat("  и изучаю компютерный науки с психологий.\n");
  toReturn = toReturn.concat("\n");
  toReturn = toReturn.concat("Мой профессиональный цель работать в кибер-безопостнасть,\n");
  toReturn = toReturn.concat("  особено в синих командах.\n");
  toReturn = toReturn.concat("\n");
  return toReturn;
}

// Method to print the language text
function changeLanguage(lang) {
  const greetingElement = document.getElementById('langDesc');

  switch (lang) {
    case "en":
      greetingElement.textContent = printEngLangDescription();
      break;
    case "sp":
      greetingElement.textContent = printSpaLangDescription();
      break;
    case "ru":
      greetingElement.textContent = printRusLangDescription();
      break;
    default:
      greetingElement.textContent = "INTERNAL ERROR";
      console.log("INTERNAL ERROR: Line 71 in scripts.d/languages.js");
  }
}