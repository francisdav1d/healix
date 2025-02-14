// Timer
let timer;
let quoteInterval;

function startTimer() {
    const timeSelect = document.getElementById("timeSelect");
    const practiceSelect = document.getElementById("practiceSelect");
    let duration = 60 * parseInt(timeSelect.value); // get selected minutes
    let display = document.getElementById("timer");
    let start = Date.now();

    clearInterval(timer);
    clearInterval(quoteInterval);
    timer = setInterval(function () {
        let elapsed = Date.now() - start;
        let timeLeft = duration - Math.floor(elapsed / 1000);
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        display.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            clearInterval(quoteInterval);
        }
    }, 1000);
    startQuotes();
    playRandomMusic();
}

function stopTimer() {
    clearInterval(timer);
    clearInterval(quoteInterval);
    document.getElementById("timer").textContent = "00:00";
}

// Play random calming music
function playRandomMusic() {
    const musicTracks = [
        document.getElementById("calmingMusic1"),
        document.getElementById("calmingMusic2"),
        document.getElementById("calmingMusic3"),
    ];
    const randomTrack = musicTracks[Math.floor(Math.random() * musicTracks.length)];
    musicTracks.forEach((track) => track.pause()); // Pause all tracks
    randomTrack.play(); // Play the selected track
}

// Motivational Quotes
const quotes = [
    "Believe you can and you're halfway there.",
    "You are stronger than you think.",
    "Stay positive, work hard, make it happen.",
    "You are capable of amazing things.",
    "The best time for new beginnings is now.",
    "Keep going, you are getting there.",
    "Every day is a new beginning.",
    "You are doing great, keep it up!",
    "Success is the sum of small efforts, repeated day in and day out.",
];

function showNewQuote() {
    document.getElementById("quote").innerHTML = `<p>${quotes[Math.floor(Math.random() * quotes.length)]}</p>`;
}

function startQuotes() {
    showNewQuote();
    quoteInterval = setInterval(showNewQuote, 20000); // Display a new quote every 20 seconds
}

// Mood Improvement Tips
const tips = [
    "Take a walk outside and enjoy nature.",
    "Practice deep breathing exercises.",
    "Spend time with loved ones.",
    "Listen to your favorite music.",
    "Engage in a hobby you enjoy.",
    "Write down what you're grateful for.",
    "Try a new recipe or cook your favorite meal.",
    "Watch a funny movie or show.",
    "Read a book that inspires you.",
];

document.getElementById("tips").innerHTML = tips.map((tip) => `<p>${tip}</p>`).join("");

// Meditation Practice Explanations
const practiceExplanations = {
    breathing:
        "Breathing Exercise: Sit or lie down in a comfortable position. Close your eyes and take deep breaths in through your nose and out through your mouth. Focus on your breath and try to clear your mind.",
    guided:
        "Guided Meditation: Find a comfortable position and close your eyes. Listen to a guided meditation audio or follow along with a video. Allow the guide to lead you through the meditation process.",
    mindfulness:
        "Mindfulness Meditation: Sit comfortably and close your eyes. Focus on your breath and observe your thoughts without judgment. Bring your attention back to your breath whenever your mind wanders.",
    stretching:
        "Stretching Exercises: Stand up straight and stretch your arms above your head. Hold for a few seconds, then bend down to touch your toes. Repeat several times.",
    yoga: "Yoga Exercises: Find a comfortable spot on the floor and sit cross-legged. Close your eyes, take deep breaths, and move through a series of gentle yoga poses. Follow along with a yoga video if needed.",
};

function showPracticeExplanation() {
    const practiceSelect = document.getElementById("practiceSelect");
    const explanation = practiceExplanations[practiceSelect.value];
    document.getElementById("practiceExplanation").innerText = explanation;
    showExerciseMedia(practiceSelect.value);
}

// Exercise Media (Videos)
const exerciseMedia = {
    breathing: `<video controls class="exercise-video"><source src="./videos/breathing.mp4" type="video/mp4">Your browser does not support the video tag.</video>`,
    guided: `<video controls class="exercise-video"><source src="./videos/guided_meditation.mp4" type="video/mp4">Your browser does not support the video tag.</video>`,
    mindfulness: `<video controls class="exercise-video"><source src="./videos/mindfulness_meditation.mp4" type="video/mp4">Your browser does not support the video tag.</video>`,
    stretching: `<video controls class="exercise-video"><source src="./videos/stretching_exercises.mp4" type="video/mp4">Your browser does not support the video tag.</video>`,
    yoga: `<video controls class="exercise-video"><source src="./videos/yoga_exercises.mp4" type="video/mp4">Your browser does not support the video tag.</video>`,
};

function showExerciseMedia(exercise) {
    const mediaContent = exerciseMedia[exercise];
    const exerciseMediaDiv = document.getElementById("exerciseMedia");
    exerciseMediaDiv.innerHTML = mediaContent;
}

// Initialize the practice explanation on load
document.addEventListener("DOMContentLoaded", () => {
    showPracticeExplanation();
});
