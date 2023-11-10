const data = {
  "tasks":{
    "one":{
      "task":"Learning Javascript",
      "state":true,
      "end":"2020/10/21"
    },
    "two":{
      "task":"Reader Book Clean Code",
      "state":false,
      "end":"2023/12/31"
    },
    "three":{
      "task":"Running",
      "state":false,
      "end":"2023/06/25"
    },
    "four":{
      "task":"Pass the Evaluation",
      "state":false,
      "end":"2023/11/09"
    },
    "five":{
      "task":"Go to Karaoke",
      "state":true,
      "end":"2022/08/25"
    },
    "six":{
      "task":"Finish watching the serie",
      "state":false,
      "end":"2023/12/31"
    },
    "seven":{
      "task":"Controll Weight",
      "state":false,
      "end":"2020/11/22"
    }
  }
}

const tasksarr = Object.values(data.tasks);
const tasksList = document.getElementById('list')
tasksList.innerHTML = ''

document.getElementById('check').addEventListener('click', () => {
  tasksList.innerHTML = ''
  const ul = document.createElement('ul')
  const filterData = tasksarr.filter(t => t.state)
  filterData.forEach(task => {
    const li = document.createElement('li')
    li.textContent = `task: ${task.task} | end: ${task.end} | state: completed `
    const input = document.createElement('input')
    ul.appendChild(input)
  });
  tasksList.appendChild(ul)
})

document.getElementById('nocheck-vig').addEventListener('click', () => {
  tasksList.innerHTML = ''
  const ul = document.createElement('ul')
  const filterData = tasksarr.filter(t => !t.state && (new Date(t.end) > new Date()))
  filterData.forEach(task => {
    const li = document.createElement('li')
    li.textContent = `task: ${task.task} | end: ${task.end} | state: no completed `
    ul.appendChild(li)
  });
  tasksList.appendChild(ul)
})

document.getElementById('check-novig').addEventListener('click', () => {
  tasksList.innerHTML = ''
  const ul = document.createElement('ul')
  const filterData = tasksarr.filter(t => t.state && (new Date(t.end) <= new Date()))
  filterData.forEach(task => {
    const li = document.createElement('li')
    li.textContent = `task: ${task.task} | end: ${task.end} | state: completed `
    ul.appendChild(li)
  });
  tasksList.appendChild(ul)
})

document.getElementById('all').addEventListener('click', () => {
  tasksList.innerHTML = ''
  const ul = document.createElement('ul')
  tasksarr.forEach(task => {
    const li = document.createElement('li')
    li.textContent = `task: ${task.task} | end: ${task.end} | state: ${task.state ? 'completed' : 'no completed'}`
    ul.appendChild(li)
  })
  tasksList.appendChild(ul)
})

const addTask = document.getElementById('add-task')
addTask.innerHTML = ''
document.getElementById('add').addEventListener('click', () => {
  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.placeholder = 'Ingrese la nueva tarea';
  addTask.appendChild(taskInput);

  const dateInput = document.createElement('input');
  dateInput.type = 'text';
  dateInput.placeholder = 'Ingrese la fecha (YYYY/MM/DD)';
  addTask.appendChild(dateInput);

  const addButton = document.createElement('button');
  addButton.textContent = 'Agregar';
  addTask.appendChild(addButton);
  addButton.addEventListener('click', () => {
    const newTask = taskInput.value;
    const newDate = dateInput.value;
    const newTaskKey = `${Object.keys(data.tasks).length + 1}`
    console.log(newTaskKey)
    if (newTask && newDate) {
      
      data.tasks[newTaskKey] = {
        task: newTask,
        state: false,
        end: newDate
      };

      taskInput.value = ''
      dateInput.value = ''
      //update()
    } else {
      alert('Asegurese de ingresar la tarea y la fecha.')
    }
  });

  
})


function update() {
  const ul = document.createElement('ul')
  tasks.forEach(task => {
    const li = document.createElement('li')
    li.textContent = `task: ${task.task} | end: ${task.end} | state: ${task.state ? 'completed' : 'no completed'}`
    ul.appendChild(li)
  });
  tasksList.innerHTML = ''
  tasksList.appendChild(ul)
}
