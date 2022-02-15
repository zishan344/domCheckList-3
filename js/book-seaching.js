const jsBook = [
  " JavaScript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Don't Know JS",
  "JavaScript and JQuery: Interactive Front-End Web Development, by Jon Duckett",
  "Eloquent JavaScript: A Modern Introduction to Programming, by Marijn Haverbeke",
];

const searching = "javascript";
let output = [];
for (const element of jsBook) {
  if (element.toLocaleLowerCase().includes(searching.toLocaleLowerCase())) {
    output.push(element);
  }
}
console.log(output);
