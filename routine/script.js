document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Clock Functionality
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
        document.getElementById("liveClock").textContent = timeString;
        setTimeout(updateClock, 1000);
    }
    updateClock();

    // Save/Load Functions
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.classList.add("task-item");
            if (task.completed) li.classList.add("completed");

            li.innerHTML = `
                <span>${task.start} - ${task.end}: ${task.task}</span>
                <div class="task-controls">
                    <button class="complete-btn" data-index="${index}">
                        ${task.completed ? '✅ Completed' : '⚪ Mark Complete'}
                    </button>
                    <button class="delete-btn" data-index="${index}">❌</button>
                </div>
            `;

            taskList.appendChild(li);
        });

        // Event Listeners
        document.querySelectorAll(".complete-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                const index = this.dataset.index;
                tasks[index].completed = !tasks[index].completed;
                saveTasks();
                renderTasks();
            });
        });

        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                const index = this.dataset.index;
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            });
        });
    }

    // Form Submission
    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const startTime = document.getElementById("startTime").value;
        const endTime = document.getElementById("endTime").value;
        const taskText = document.getElementById("task").value.trim();

        if (startTime && endTime && taskText) {
            tasks.push({ 
                start: startTime, 
                end: endTime, 
                task: taskText, 
                completed: false 
            });
            saveTasks();
            renderTasks();
            taskForm.reset();
        }
    });

    renderTasks();
});