
document.getElementById("form").addEventListener("submit",function(event){
        event.preventDefault();
        var taskManager: Manager = createTaskManager();
        
        var category: string =  document.getElementsByName("category")[0].value;
        var title: string = document.getElementsByName("Title")[0].value;
        var periorty: number = document.getElementsByName("periorty")[0].value;
        var estimate: number = document.getElementsByName("Estimate")[0].value;
        
        var task: Task = taskManager.create(category, title, periorty, estimate);
        var Tasks_table = document.getElementById("Tasks_table");
        var row =  Tasks_table.insertRow(Tasks_table.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
               
        cell1.innerHTML = task.category;
        cell2.innerHTML = task.title;
        cell3.innerHTML = task.priority;
        cell4.innerHTML = task.estimate;
});