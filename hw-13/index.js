'use strict'

const [table, nameInput, surnameInput, phoneInput, addBtn] = [
    document.querySelector('#tableMain'),
    document.querySelector('#nameInput'),
    document.querySelector('#surnameInput'),
    document.querySelector('#phoneInput'),
    document.querySelector('#addBtn'),
  ];
  
  addBtn.addEventListener('click', onBtnClick);
  table.addEventListener('click', onTrClick);
  
  function onBtnClick() {
    const todo = getTodoData();
  
    if(!isTodoValid(todo)) {
      alert('Будь ласка, заповніть всі поля коректно!');
      return;
    }
    renderTodo(todo);
    clear();
  
  }
  
  function getTodoData() {
    return { 
      name: nameInput.value.trim(),
      surname: surnameInput.value.trim(),
      phone: phoneInput.value.trim() 
    };
  }
  
  function isTodoValid(todo) {
    return todo.name !== '' && todo.surname !== '' && (!isNaN(todo.phone) && (todo.phone.length >= 10 && todo.phone.length <= 12));
  }
  
  function renderTodo(todo) {
    const newRowHTML = `
    <tr class='todoItem'>
        <td>${todo.name}</td>
        <td>${todo.surname}</td>
        <td>${todo.phone}</td>
        <td><button class='deleteBtn'>Видалити</button></td>
    </tr>
   `;
  
    table.insertAdjacentHTML('beforeend', newRowHTML);
  }
  
  function clear() {
    nameInput.value = '';
    surnameInput.value = '';
    phoneInput.value = '';
  }
  
  function onTrClick(e) {
    const tr = e.target.closest('.todoItem');
  
    if(tr) {
      if (e.target.classList.contains('deleteBtn')) {
        tr.remove();
      }
    }
  }