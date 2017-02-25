var Task = (function () {
    function Task(category, title, priority, estimate, spent, remaining) {
        this.category = category;
        this.title = title;
        this.priority = priority;
        this.estimate = estimate;
        this.spent = spent;
        this.remaining = remaining;
        this.spent = this.spent || 0;
        this.remaining = this.remaining || 1.5;
    }
    Task.prototype.track = function (spent_nmber) {
        if (spent_nmber > 0) {
            this.spent = spent_nmber;
            this.remaining -= spent_nmber;
        }
    };
    Task.prototype.done = function () {
        return this.remaining == 0;
    };
    Task.prototype.complete = function () {
        this.remaining = 0;
    };
    return Task;
}());
