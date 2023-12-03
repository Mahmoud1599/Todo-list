// app.js
function createTodoList() {
    const todoLabel = document.getElementById('todo-label').value;
    const themeSelect = document.getElementById('theme-select');
    const selectedTheme = themeSelect.options[themeSelect.selectedIndex].value;

    if (!todoLabel) {
        alert('Please enter a valid todo label.');
        return;
    }

    const todoListDiv = document.createElement('div');
    todoListDiv.className = `todo-list ${selectedTheme}`;
    todoListDiv.id = `${selectedTheme}-${todoLabel.toLowerCase().replace(/\s/g, '-')}`;
    todoListDiv.innerHTML = `
        <h3>${todoLabel}'s Todo List</h3>
        <div class="todo-items" id="${selectedTheme}-items-${todoLabel.toLowerCase().replace(/\s/g, '-')}"></div>
        <div>
            <input type="text" id="${selectedTheme}-new-item-${todoLabel.toLowerCase().replace(/\s/g, '-')}" placeholder="New item">
            <button onclick="addItem('${selectedTheme}', '${todoLabel}')">+</button>
        </div>
    `;

    document.getElementById('todo-lists').appendChild(todoListDiv);
}

function addItem(theme, todoLabel) {
    const newItemInput = document.getElementById(`${theme}-new-item-${todoLabel.toLowerCase().replace(/\s/g, '-')}`);
    const newItem = newItemInput.value;
    
    if (!newItem) {
        alert('Please enter a valid item.');
        return;
    }

    const itemList = document.getElementById(`${theme}-items-${todoLabel.toLowerCase().replace(/\s/g, '-')}`);
    const itemDiv = document.createElement('div');
    itemDiv.className = 'todo-item';
    itemDiv.innerHTML = `
        <label>
            <input type="checkbox" onchange="toggleItem(this, '${theme}')"> ${newItem}
        </label>
        <button onclick="removeItem(this, '${theme}')">-</button>
    `;

    itemList.appendChild(itemDiv);
    newItemInput.value = '';
}

function removeItem(button, theme) {
    const itemDiv = button.parentElement;
    itemDiv.remove();
}

// function toggleItem(checkbox, theme) {
//     const itemDiv = checkbox.parentElement.parentElement;
//     itemDiv.classList.toggle('checked', checkbox.checked);
//     labelElement.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
// }
function toggleItem(checkbox, theme) {
    const labelElement = checkbox.parentElement;
    labelElement.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
}

