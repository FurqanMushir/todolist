let input = document.getElementById('inputs');
let addBtn = document.getElementById('addTask');
let uList = document.getElementById('tasks');

addBtn.addEventListener('click',()=>{
    if(input.value.trim()=== ""){
        alert("Plz Add valid Task");
    }
    else{
        let empty = document.querySelector('h3');
        if (empty) {
            empty.remove();
        }
        let li = document.createElement('li');
        li.textContent = input.value;
        uList.appendChild(li);
        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove Task';
        li.appendChild(removeBtn);
        removeBtn.addEventListener('click',()=>{
            li.remove();
        })
        input.value = "";
    }
})