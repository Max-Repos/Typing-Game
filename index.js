const setOfWords = [
  "My name is Mahesh Waghmare",
  "I have completed my Btech in computer science",
  "Believe no one",
];

const msg = document.querySelector("#msg");
const typeWords = document.querySelector("#mywords");
const btn = document.querySelector("#btn");

let startTime, endTime;

const playGame = () => {
  let randomNumber = Math.floor(Math.random() * setOfWords.length);
  msg.innerText = setOfWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = Math.round((endTime - startTime) / 1000);
  // console.log(totalTime);

  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);

  let speed = Math.round((wordCount / totalTime) * 60);
  // console.log(speed);

  let finalMsg = `You typed total at ${speed} words per minutes\n`;
  finalMsg += compareWords(msg.innerText, totalStr);
  msg.innerText = finalMsg;
};

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;

  words1.forEach((item, index) => {
    if (item == words2[index]) {
      cnt++;
    }
  });

  let errorWords = words1.length - cnt;
  let persentage = Math.round((cnt / words1.length) * 100);
  return `${cnt} correct out of ${words1.length} words and the total number of error are ${errorWords} .\n ${persentage} percentage correct`;
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  // console.log(response);
  return response;
};

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    typeWords.disabled = false;
    playGame();
  } else if (this.innerText == "Done") {
    typeWords.disabled = true;
    btn.innerText = "Start";
    endPlay();
  }
});
