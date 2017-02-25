function createTaskManager() {
    return new Manager();
}
var Manager = (function () {
    function Manager() {
        this.tasks = [];
    }
    Manager.prototype.create = function (category, title, priority, estimate) {
        var task = new Task(category, title, priority, estimate);
        this.tasks.push(task);
        return task;
    };
    Manager.prototype.get = function (index) {
        return this.tasks[index];
    };
    Manager.prototype.getAll = function (activeOnly) {
        if (activeOnly) {
            var active_tasks = [];
            for (var i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].estimate != 0) {
                    active_tasks.push(this.tasks[i]);
                }
            }
            return active_tasks;
        }
        return this.tasks;
    };
    Manager.prototype.find = function (titleOrcategory) {
        var target_tasks = [];
        titleOrcategory = titleOrcategory.toLowerCase();
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].title.toLowerCase().indexOf(titleOrcategory) != -1 ||
                this.tasks[i].category.toLowerCase().indexOf(titleOrcategory) != -1) {
                target_tasks.push(this.tasks[i]);
            }
        }
        return target_tasks;
    };
    Manager.prototype.remove = function (index) {
        if (typeof index != 'number') {
            index = this.tasks.indexOf(index);
        }
        this.tasks.splice(index);
    };
    return Manager;
}());
