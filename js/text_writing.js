const textToWrite = "Upskill your skillset with corporate bhaiya and land your dream job";
let currentIndex = 0;

function writeLetter() {
    if (currentIndex < textToWrite.length) {
        document.getElementById('editabletext').textContent += textToWrite[currentIndex];
        currentIndex++;
        setTimeout(writeLetter, 100); // Call writeLetter every 1000ms (1 second)
    } else {
        // After the entire text is written, clear the text box and restart
        setTimeout(() => {
            clearText();
            writeLetter();
        }, 1000); // Wait 1 second before restarting
    }
}

function clearText() {
    document.getElementById('editabletext').textContent = '';
    currentIndex = 0;
}

function startWriting() {
    clearText();
    writeLetter();
}

// Start the writing process automatically when the page loads
window.onload = startWriting;