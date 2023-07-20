const [ul, btn, inputText] = [
    document.querySelector('#todoList'),
    document.querySelector('#msgButton'),
    document.querySelector('#msgInput'),
  ];
  
  btn.addEventListener('click', onButtonClick);
  
  function onButtonClick() {
    const newItemText = inputText.value.trim();
    if (newItemText === '') {
      return;
    }
  
    const newItem = document.createElement('li');
    newItem.textContent = newItemText;
    ul.append(newItem);
    inputText.value = '';
  }
  