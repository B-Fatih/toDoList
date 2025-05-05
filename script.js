const input = document.getElementById("toDoinput");
const btnAdd = document.getElementById("btnAdd");
const list = document.getElementById("toDoList");
let idCounter = 1;
todaydate();

function updatetodoCounter(){
  const totalToDo = document.querySelectorAll("#toDoList li");
  const completedToDo = document.querySelectorAll('#toDoList input[type="checkbox"]:checked');
  const meter = document.getElementById("todoCounter");
  meter.textContent = `${completedToDo.length}/${totalToDo.length}`;
}


btnAdd.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;
  if (text.length > 60){
    alert("60 karakterden uzun yazılamaz!")
    return;
  }

  list.style.display = "block";

  const li = document.createElement("li");
  li.className = "toDo";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "todo-" + idCounter;
  checkbox.addEventListener("change", updatetodoCounter);

  const label = document.createElement("label");
  label.htmlFor = "todo-" + idCounter;
  label.className = "todo-text";
  label.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.className = "btnDelete";
  delBtn.textContent = "❌";

  delBtn.addEventListener("click", () => {
    li.remove();
    if (list.children.length === 0) {
      list.style.display = "none"; 
    }
    updatetodoCounter();
  });
 

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(delBtn);
  list.appendChild(li);
  updatetodoCounter();
  input.value = "";
  input.focus();

  idCounter++;
});

input.onkeydown = (e) => {
  if (e.key == "Enter"){
    e.preventDefault();
    btnAdd.click();

  }
};
function todaydate() {
  const today = new Date();
  const date = today.toLocaleDateString();
  document.getElementById("today").textContent = date;
}