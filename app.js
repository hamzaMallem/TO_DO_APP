let allTasks = [
    {
        "title" : "افرأ كتاب",
        "date": "12/3/2023",
        "statu": false,
    },
    {
        "title" : "تعلم رايتينغ",
        "date": "12/3/2023",
        "statu": true,
    },
    {
        "title" : "مطالعة ",
        "date": "12/3/2023",
        "statu": false,
    },
    {
        "title" : "مراجعة دروس",
        "date": "12/3/2023",
        "statu": false,
    }
];

// Get task From local storage

function getTaskFromLocaleStorage(){

    let taskFromStoarge = JSON.parse(localStorage.getItem("task"));
    console.log(taskFromStoarge);

    allTasks = taskFromStoarge ?? [];
};

getTaskFromLocaleStorage();
//   END Get task From local storage //


// set task to local storage

function TaskToLocalStorage(){
    let taskString = JSON.stringify(allTasks);
       localStorage.setItem("task", taskString);
}

// END set task to local storage //








// add task to page 
function AddTasks(){
    
    document.querySelector(".tasks").innerHTML = ""; 

    let index = 0;

    // loop for add all data
    for(taSk of allTasks){
            
    let content = `
    <div class="task ${taSk.statu ? 'done' : '' }">
        <div class="task-info">
            <h5>${taSk.title}</h5>
            <div class="time">
                <span class="material-symbols-outlined">
                    calendar_month
                    </span>
                ${taSk.date}
            </div>
        </div>

        <!-- button -->
        <div class="task-action">
            <span onclick="deletTask(${index})"  class="material-symbols-outlined cercle red">
                delete
                </span>
            <span onclick="editTask(${index})" class="material-symbols-outlined cercle blue">
                edit_note
            </span>

            ${allTasks[index].statu ? `<span onclick= "completeTask(${index})" class="material-symbols-outlined cercle red">
            close
                </span>` :` <span onclick= "completeTask(${index})" class="material-symbols-outlined cercle green">
                done
            </span>`}
           
        </div>
        <!--// button // -->
    </div>
`;

document.querySelector(".tasks").innerHTML += content;

index++;

    }
    // end loop
};

AddTasks();

let btnAddTask = document.getElementById("addTask");

btnAddTask.addEventListener("click", function(){

    
   let taskName = prompt("ادخل مههمتك التالية :");
   let now = new Date();

   let taskdate = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();


    let taskNew = {
        "title": taskName,
        "date": taskdate,
        "statu" : false
    }
    //push New task the Gloabl tasks
    allTasks.push(taskNew);


    // set task to local strg

    TaskToLocalStorage();



    // call Functuion AddTasks
    AddTasks();



});

// delet task 
function deletTask(index){

    let isOkey = confirm('هل تريد حذف مهمة  :  ' + allTasks[index].title);

    if(isOkey){

        allTasks.splice(index, 1);

        // set task to locale storage 
        TaskToLocalStorage();

       AddTasks();

    };

};
// end function delet task

// function of edit task

function  editTask(index){

    let task= allTasks[index];

    let NewTaskModify = prompt("هل تريد تعديل مهمتك الحالية؟" , task.title) ;

    if(NewTaskModify !== task.title){
        task.title = NewTaskModify; 

         // set task to locale storage 
         TaskToLocalStorage();

        AddTasks();

    }

};

// function for confirmation task
function completeTask(index){
    let task = allTasks[index];

    if(task.statu === false){
        task.statu = true;

         // set task to locale storage 
         TaskToLocalStorage();

        AddTasks();

    }else{
        
        task.statu = false;

         // set task to locale storage 
         TaskToLocalStorage();

         AddTasks();

    }    
};

// ================ storage function =================== //



