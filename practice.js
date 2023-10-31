// Get the paragraph element
const paragraph = document.getElementById("paragraph");
let text = paragraph.textContent;

// Highlight words over 8 characters
const words = text.split(' ');

// Loop through the words and highlight those over 8 characters
words.forEach((word, index) => {
    if (word.length > 8) {
        const regex = new RegExp(word, "g");
        text = text.replace(regex, `<span style="background-color: yellow">${word}</span>`);
    }
});

paragraph.innerHTML = text;

// link back to the source
const sourceLink = document.createElement("a");
sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
sourceLink.textContent = "Source";
paragraph.insertAdjacentElement("afterend", sourceLink);

// Split each sentence onto a separate line
const sentences = text.split('. ');
const formattedText = sentences.join('.<br>');
paragraph.innerHTML = formattedText;

// the number of words
const wordCount = words.length;

// Replace question marks and exclamation marks
const replacedText = paragraph.innerHTML.replace(/\?/g, '&#129300;').replace(/!/g, '&#128562;');
paragraph.innerHTML = replacedText;

// word count after the heading
const heading = document.querySelector("h1");
const wordCountDisplay = document.createElement("p");
wordCountDisplay.textContent = `Word Count: ${wordCount}`;
heading.insertAdjacentElement("afterend", wordCountDisplay);


//-------------------------------------------

// form elements
const registrationForm = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const registerButton = document.getElementById("registerButton");
const registrationMessage = document.getElementById("registrationMessage");

// Error messages
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// event listeners for input validation
usernameInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);
confirmPasswordInput.addEventListener("input", validateForm);

// event listener for registration button
registerButton.addEventListener("click", registerUser);

function validateForm() {
    // Check if all inputs have values
    const usernameValid = usernameInput.value.trim() !== "";
    const passwordValid = passwordInput.value.trim() !== "";
    const confirmPasswordValid = confirmPasswordInput.value.trim() !== "";

    // Check if passwords match
    const passwordsMatch = passwordInput.value === confirmPasswordInput.value;

    // Update error messages
    usernameError.style.display = usernameValid ? "none" : "block";
    passwordError.style.display = passwordValid ? "none" : "block";
    confirmPasswordError.style.display = confirmPasswordValid ? "none" : "block";

    // Enable or disable the register button based on validation
    registerButton.disabled = !(usernameValid && passwordValid && confirmPasswordValid && passwordsMatch);
}

function registerUser() {
    if (registerButton.disabled) {
        registrationMessage.textContent = "Please fill in all fields and ensure passwords match.";
    } else {
        registrationMessage.textContent = "Registration successful!";
    }
}