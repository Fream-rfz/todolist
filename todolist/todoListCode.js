// Получаем элементы из HTML по их идентификаторам
const taskInput = document.getElementById('task-input')
const addTaskButton = document.getElementById('add-task')
const taskList = document.getElementById('task-list')
// Функция для добавления задачи
function addTask() {
    const taskText = taskInput.value.trim(); // Получаем текст задачи и убираем лишние пробелы

   
    if (taskText === '') {
        alert('Пожалуйста, введите задачу!'); // Сообщение об ошибке
        return; // Прерываем выполнение функции
    }

    // Создаем новый элемент списка (li) для задачи
    const taskItem = document.createElement('div');
    taskItem.classList.add('task')
    taskItem.innerHTML = `
        <span>${taskText}</span> 
        <button class="complete-btn">Выполнено</button> 
        <button class="delete-btn">Удалить</button> 
        
    `

    // Добавляем обработчики событий для кнопок
    taskItem.querySelector('.complete-btn').addEventListener('click', () => {
        taskItem.querySelector('span').classList.toggle('completed')
    });

    taskItem.querySelector('.delete-btn').addEventListener('click', () => {
        taskList.removeChild(taskItem); // Удаляем задачу из списка
    });

    // Добавляем новую задачу в список задач
    taskList.appendChild(taskItem)

    // Очищаем поле ввода после добавления задачи
    taskInput.value = ''
}


addTaskButton.addEventListener('click', addTask);


taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask()
    }
})
