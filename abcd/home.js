// Search functionality
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.course-card');
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
});

// Simple quiz example (can be expanded)
function startQuiz() {
    const questions = [
        { q: "What does HTML stand for?", a: "HyperText Markup Language" },
        { q: "What is a firewall?", a: "A security system" }
    ];
    let score = 0;
    questions.forEach(q => {
        const answer = prompt(q.q);
        if (answer.toLowerCase().includes(q.a.toLowerCase())) score++;
    });
    alert(`Your score: ${score}/${questions.length}`);
}
// Call startQuiz() on a button click in courses.html