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
    ul.appendChild(li)
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
  const filterData = tasksarr.filter(t => t.state)
  filterData.forEach(task => {
    const li = document.createElement('li')
    li.textContent = `task: ${task.task} | end: ${task.end} | state: completed `
    ul.appendChild(li)
  });

  const filterDatanc = tasksarr.filter(t => !t.state)
  filterDatanc.forEach(task => {
    const li = document.createElement('li')
    li.textContent = `task: ${task.task} | end: ${task.end} | state: no completed `
    ul.appendChild(li)
  });
  tasksList.appendChild(ul)
})

