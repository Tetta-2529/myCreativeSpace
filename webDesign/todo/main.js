const addNewTodo = document.querySelector('#add-new-todo');

addNewTodo.addEventListener('click', () => {
  const valueNewTodo = document.querySelector('#value-new-todo').value;
  if (valueNewTodo != '') {
    const inCompleteTodo = document.querySelector('#incomplete-todo');
    const inCompleteTodoNumber = inCompleteTodo.children.length + 1;
    document.querySelector('#value-new-todo').value = '';

    const li = document.createElement('li');

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'incomplete-check' + inCompleteTodoNumber;

    const label = document.createElement('label');
    label.setAttribute('for', `incomplete-check${inCompleteTodoNumber}`);
    label.innerText = valueNewTodo;

    li.appendChild(input);
    li.appendChild(label);
    inCompleteTodo.appendChild(li);
  } else {
    alert('登録したいTODOを入力してください');
  }
});

const checkboxs = document.querySelectorAll('input[type="checkbox"]');
checkboxs.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    console.log(checkbox.checked);
    if (checkbox.checked) {
      const todoText = checkbox.nextElementSibling.innerText;
      const inCompleteTodo = document.querySelector('#incomplete-todo');
      const moveTodo = checkbox.parentNode;
      inCompleteTodo.removeChild(moveTodo);
      const completeTodo = document.querySelector('#complete-todo');
      const completeTodoNumber = completeTodo.children.length + 1;

      const li = document.createElement('li');

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = 'complete-check' + completeTodoNumber;
      input.checked = true;

      const label = document.createElement('label');
      label.setAttribute('for', `complete-check${completeTodoNumber}`);
      label.innerText = todoText;

      li.appendChild(input);
      li.appendChild(label);
      completeTodo.appendChild(li);
      console.log(checkboxs);
    } else if (!checkbox.checked) {
      const todoText = checkbox.nextElementSibling.innerText;
      const completeTodo = document.querySelector('#complete-todo');
      console.log(completeTodo);
      const moveTodo = checkbox.parentNode;
      completeTodo.removeChild(moveTodo);
      const inCompleteTodo = document.querySelector('#incomplete-todo');
      const inCompleteTodoNumber = inCompleteTodo.children.length + 1;
      const li = document.createElement('li');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = 'incomplete-check' + inCompleteTodoNumber;
      input.checked = false;
      const label = document.createElement('label');
      label.setAttribute('for', `incomplete-check${inCompleteTodoNumber}`);
      label.innerText = todoText;
      li.appendChild(input);
      li.appendChild(label);
      inCompleteTodo.appendChild(li);
    }
  });
});
