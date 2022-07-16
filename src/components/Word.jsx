import wordBank from "../wordle-bank.txt";

export const generateWord = async () => {
  let word;

  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      word = wordArr[Math.floor(Math.random() * wordArr.length)];
    });
  return { word };
};

export default generateWord;
