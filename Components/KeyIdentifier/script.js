
let show = document.querySelector(".container");
let Key = document.querySelector(".Key")
let Code = document.querySelector(".Code")

let KeyContainer = document.querySelector(".KeyContainer")
let CodeContainer = document.querySelector(".CodeContainer")


Key.classList.add("hide")
Code.classList.add("hide")

document.addEventListener('keydown', (e) => {

    show.classList.add("hide")
    Key.classList.remove("hide")
    Code.classList.remove("hide")

    const KeyOutput = `${e.key === " " ? 'Space' : e.key}`
    const CodeOutput = `${e.code}`

    KeyContainer.innerHTML = KeyOutput;
    CodeContainer.innerHTML = CodeOutput;

    deleteExistingAudio();
    const soundPath = `sounds/${e.key.toLowerCase()}.mp3`;
    const audio = new Audio(soundPath);
    show.insertAdjacentElement("beforebegin", audio);
    audio.play();



    // const audio = createNewAudio(event.key);

    // audio.play();

},);

function deleteExistingAudio() {
    document.querySelector("audio")?.remove();
}

// function createNewAudio(text) {
//     const audio = document.createElement("audio");
//     audio.id = text;
//     audio.src = `sounds/${text.toLowerCase()}.mp3`;
//     audio.playbackRate = 1;
//     audio.loop = false;
//     return audio;
// }

/*
->  what is string interpolation?

1.  You can certainly write outputMessage = keyName if you don't need any string formatting or 
    interpolation. However, using string interpolation with ${} allows for more flexibility and 
    readability, especially when you need to include variables or expressions within the string.

2.  For example, if you want to include multiple variables or combine them with other strings, 
    using string interpolation makes the code cleaner and easier to understand. Additionally, 
    it automatically converts non-string values to strings, which can be convenient in certain 
    cases.

    For example, const greeting = `Hello, ${name}!`;
    ${name} is an example of string interpolation. It allows the value of the name variable to 
    be inserted directly into the string greeting.

3.  The Audio() constructor creates and returns a new HTMLAudioElement which can be either 
    attached to a document for the user to interact with and/or listen to, or can be used 
    offscreen to manage and play audio.

3.  The insertAdjacentElement method is being used to dynamically insert the audio element into 
    the DOM before the container element.
 */