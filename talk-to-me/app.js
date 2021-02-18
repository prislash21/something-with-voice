//for the talktome section
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// some greethings message

const greetings = [
  "I'm goog you little piece of love",
  'Doing good my love',
  'leave me alone',
  "Don't ask me that",
];
//something about personal info

const personal = [
  "I'm your mate",
  'I am priota',
  'I am who I am ',
  'You dont need to know that',
  'I know you are Araddha',
];
var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log('voice is activated !! now you can speak to microphone');
};

recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};
// add the listener to the btn

btn.addEventListener('click', () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = 'I dont know what you said';

  if (message.includes('how are you')) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  } else if (message.includes('Who are you ')) {
    const finalText = personal[Math.floor(Math.random() * personal.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
