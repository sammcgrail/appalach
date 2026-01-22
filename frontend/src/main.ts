import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello App</h1>
  <input type="text" id="name" placeholder="Enter your name" />
  <button id="greet">Greet</button>
  <p id="result"></p>
`;

const nameInput = document.querySelector<HTMLInputElement>("#name")!;
const greetBtn = document.querySelector<HTMLButtonElement>("#greet")!;
const result = document.querySelector<HTMLParagraphElement>("#result")!;

greetBtn.addEventListener("click", async () => {
  const name = nameInput.value || "World";
  const res = await fetch(`/api/hello?name=${encodeURIComponent(name)}`);
  const data = await res.json();
  result.textContent = data.message;
});
