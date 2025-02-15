document.addEventListener("DOMContentLoaded", () => {
    const tasks = [
        { name: "Run 2 km", description: "Running is the best therapy.", difficulty: 5, image: "./images/run.png" },
        { name: "Drink 2.5L Water", description: "Stay hydrated, stay energized.", difficulty: 3, image: "./images/water.png" },
        { name: "Pray for 5 minutes", description: "A moment of peace.", difficulty: 3, image: "./images/prayer.png" },
        { name: "Study for 1 hour", description: "Knowledge is power.", difficulty: 4, image: "./images/study.png" },
        { name: "Meditate for 5 minutes", description: "Calm your mind.", difficulty: 3, image: "./images/meditate.png" },
        { name: "Workout for 1 hour", description: "Train your body and mind.", difficulty: 5, image: "./images/workout.png" }
    ];

    const tasksContainer = document.getElementById("tasks");

    tasks.forEach((task, index) => {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");
        taskCard.style.backgroundImage = `url('${task.image}')`;

        taskCard.innerHTML = `
            <h2>${task.name}</h2>
            <p>${task.description}</p>
            <p class="streak"> Streak: <span id="streak-${index}">0</span> days</p>
            <p class="difficulty">Difficulty: ${"⭐".repeat(task.difficulty)}</p>
            <button class="complete-btn" data-index="${index}"> Complete</button>
        `;

        tasksContainer.appendChild(taskCard);

        // Add fade-in effect
        taskCard.style.opacity = 0;
        taskCard.style.transform = "translateY(20px)";
        taskCard.style.transition = "opacity 1s, transform 1s";
        setTimeout(() => {
            taskCard.style.opacity = 1;
            taskCard.style.transform = "translateY(0)";
        }, 100 * index);
    });

    document.querySelectorAll(".complete-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            let streakElement = document.getElementById(`streak-${index}`);
            let streak = parseInt(streakElement.textContent);
            streakElement.textContent = streak + 1;
            e.target.disabled = true;

            // Add a subtle scale animation on button click
            e.target.style.transform = "scale(0.95)";
            e.target.style.transition = "transform 0.2s";
            setTimeout(() => {
                e.target.style.transform = "scale(1)";
            }, 200);
        });
    });

    // Add fade-out effect on scroll
    window.addEventListener("scroll", () => {
        const windowHeight = window.innerHeight;
        document.querySelectorAll(".task-card").forEach(taskCard => {
            const rect = taskCard.getBoundingClientRect();
            if (rect.top < 0) {
                taskCard.style.opacity = 0;
                taskCard.style.transition = "opacity 1s";
            } else {
                taskCard.style.opacity = 1;
                taskCard.style.transition = "opacity 1s";
            }
        });
    });
});
