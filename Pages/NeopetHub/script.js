document.querySelectorAll(".collapsible").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const content = btn.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});






/////////
    function $(el) {
      return document.querySelector(el);
    };
    ///////
    
    const taskInput = $('#taskInput');
    const addTaskBtn = $('#addTaskBtn');
    const taskContainer = $('#taskContainer');
    
    //////
        function createTask(exampleText)  {
          const div = document.createElement('div');
          const input = document.createElement('input');
          const span = document.createElement('span');
          const button = document.createElement('button');
          div.classList.add('task');
          input.classList.add('taskCheck');
          button.classList.add('deleteBtn');
          span.classList.add('taskText');
          input.type = 'checkbox';
          button.innerText = 'Delete';
          span.innerText = exampleText;
          div.appendChild(input);
          div.appendChild(span);
          div.appendChild(button);
          taskContainer.appendChild(div);

          button.addEventListener('click', () => {
            div.remove()
          });
          input.addEventListener('change', () => {
  div.classList.toggle('completed', input.checked);
});

        };


        /////
    
        addTaskBtn.addEventListener('click', () => {

          const text = taskInput.value;
          
          if (!text.trim()) return;

          createTask(text);

          
          taskInput.value = "";         

        });
    

