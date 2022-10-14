document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // const new_task= document.querySelector('#new-task-description')
  document.querySelector('#create-task-form').addEventListener('submit', (e) => {
    e.preventDefault()
    handleTodo(e.target.new_task.value)
    document.querySelector('#create-task-form').reset()
  })
});
function handleTodo(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click',deleteHandle)
  btn.textContent = 'X'
  li.textContent = `${todo} `
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}
function deleteHandle(e){
  e.target.parentNode.remove()
};