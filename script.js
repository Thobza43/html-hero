function runCode() {
    const code = document.getElementById('code').value;
    const output = document.getElementById('output');
    output.srcdoc = code;
}

function startTutorial(lessonNumber) {
    alert(`Starting Tutorial ${lessonNumber}`);
    // Add tutorial content display logic here
}

function startQuiz() {
    alert('Starting Quiz');
    // Add quiz functionality here
}