const addBtn = document.querySelector("#push");
addBtn.addEventListener("click", (event) => {
  let userInput = document.querySelector("#new-task input");
  console.log(userInput);
  if (userInput.value.length == 0) {
    alert("Please Enter a task");
  } else {
    let tasks = document.querySelector("#tasks");
    tasks.innerHTML += `
      <div class="task">
        <span id="taskname">
          ${userInput.value}
        </span>
        <button class="delete">
           <i class="fa fa-trash-o"></i>
           
        </button>
      </div>
    `;
    userInput.value = "";
    tasks.addEventListener("click", (event) => {
      event.currentTarget.classList.toggle("completed");
    });
  }
  let currentTasks = document.querySelectorAll(".delete");
  console.log(currentTasks);
  currentTasks.forEach((task) => {
    task.addEventListener("click", (event) => {
      console.log(event.currentTarget);
      event.currentTarget.parentNode.remove();
    });
  });
});
