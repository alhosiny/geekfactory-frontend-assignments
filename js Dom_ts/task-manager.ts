function createTaskManager(): Manager{
       return new Manager();
}

class Manager {
    tasks: Array<Task> = [];
    create(category: string, title: string, priority: number,
                   estimate:number): Task{
           var task = new Task(category, title, priority,estimate);
           this.tasks.push(task);
           return task;        
    }
    get(index: number):Task{
        return this.tasks[index];
    } 
    getAll(activeOnly?: boolean): Array<Task>{
        if(activeOnly){
          var active_tasks: Array<Task> = [];
          for(var i = 0;i < this.tasks.length; i++){
              if(this.tasks[i].estimate != 0){
                  active_tasks.push(this.tasks[i]);
              }
          }
          return active_tasks;    
        }
        return this.tasks;
    }
    find(titleOrcategory: string): Array<Task>{
        var target_tasks: Array<Task> = [];
        titleOrcategory = titleOrcategory.toLowerCase();
        for(var i = 0;i < this.tasks.length; i++){
              if(this.tasks[i].title.toLowerCase().indexOf(titleOrcategory) != -1 ||
                 this.tasks[i].category.toLowerCase().indexOf(titleOrcategory) != -1){
                  target_tasks.push(this.tasks[i]);
              }
          }
          return target_tasks;  
    }
    remove(index: any){
        if(typeof index != 'number'){
            index = this.tasks.indexOf(index);
        }
        this.tasks.splice(index); 
    }
}

