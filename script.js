


let add=document.getElementById('addtask');


add.addEventListener('click',()=>{
    const addedtasks=document.getElementById('tasks');

    const task=document.getElementById('task');

    const newtask=task.value;


    if (newtask.trim() !== '') {
    const newpara = document.createElement("li");
    newpara.innerText=newtask;

    newpara.addEventListener('dblclick', function () {
      newpara.remove();
    });
    newpara.addEventListener('click', function () {
      newpara.classList.toggle('mark_completed');
      });
      addedtasks.appendChild(newpara);
   task.value='';}
})


