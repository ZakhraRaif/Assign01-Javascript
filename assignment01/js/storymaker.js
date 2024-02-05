// Arrays for random phrases
const nouns1 = ['The Turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher', 'The Elephant', 'The Cat'];
const verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const settings = ['on the moon', 'on the chair', 'in my spagetti', 'in my soup', 'on the grass', 'in my shoes'];

// Event listeners
document.getElementById('noun1').addEventListener('click', noun1_on_click);
document.getElementById('verb').addEventListener('click', verb_on_click);
document.getElementById('adjective').addEventListener('click', adjective_on_click);
document.getElementById('noun2').addEventListener('click', noun2_on_click);
document.getElementById('setting').addEventListener('click', setting_on_click);
document.getElementById('playback').addEventListener('click', playback_on_click);
document.getElementById('random').addEventListener('click', random_on_click);

// Functions
function addStudentInfo() {
    document.getElementById('studentId').textContent = "Student ID: YOUR_STUDENT_ID";
}

function noun1_on_click() {
    const randomNoun1 = getRandomElement(nouns1);
    document.getElementById('chosenNoun1').textContent = randomNoun1;
}

function verb_on_click() {
    const randomVerb = getRandomElement(verbs);
    document.getElementById('chosenVerb').textContent = randomVerb;
}

function adjective_on_click() {
    const randomAdjective = getRandomElement(adjectives);
    document.getElementById('chosenAdjective').textContent = randomAdjective;
}

function noun2_on_click() {
    const randomNoun2 = getRandomElement(nouns2);
    document.getElementById('chosenNoun2').textContent = randomNoun2;
}

function setting_on_click() {
    const randomSetting = getRandomElement(settings);
    document.getElementById('chosenSetting').textContent = randomSetting;
}

function playback_on_click() {
    const story = concatenateStory();
    document.getElementById('story').textContent = story;
}

function random_on_click() {
    document.getElementById('chosenNoun1').textContent = getRandomElement(nouns1);
    document.getElementById('chosenVerb').textContent = getRandomElement(verbs);
    document.getElementById('chosenAdjective').textContent = getRandomElement(adjectives);
    document.getElementById('chosenNoun2').textContent = getRandomElement(nouns2);
    document.getElementById('chosenSetting').textContent = getRandomElement(settings);

    const story = concatenateStory();
    document.getElementById('story').textContent = story;
}

function concatenateStory() {
    const noun1 = document.getElementById('chosenNoun1').textContent;
    const verb = document.getElementById('chosenVerb').textContent;
    const adjective = document.getElementById('chosenAdjective').textContent;
    const noun2 = document.getElementById('chosenNoun2').textContent;
    const setting = document.getElementById('chosenSetting').textContent;

    return `${noun1} ${verb} ${adjective} ${noun2} ${setting} .`;
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function changeInfo() {
    const studentInfoParagraph = document.getElementById('studentInfo');
    const currentContent = studentInfoParagraph.textContent;

    // Check if the current content is the student ID, change it to your name, and vice versa
    if (currentContent.includes("Student ID")) {
        studentInfoParagraph.textContent = "Student Name: Rahid Jakhra";
    } else {
        studentInfoParagraph.textContent = "Student ID: 200540928";
    }
}

document.getElementById('changeInfoButton').addEventListener('click', changeInfo);
document.getElementById('playback').addEventListener('click', playback_on_click);
document.getElementById('random').addEventListener('click', random_on_click);

// Call addStudentInfo function when the page loads
addStudentInfo();
