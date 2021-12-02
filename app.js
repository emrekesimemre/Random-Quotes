let btn = document.getElementById('btn');
let share = document.getElementById('share');
let quotes = [];
//color: rgb(red, green, blue);

const getQuote = async () => {
  let response = await axios('https://type.fit/api/quotes');
  console.log(response.data);
  quotes = response.data;
  console.log(quotes);
  Change();
};

getQuote();

function Change() {
  let count = quotes.length;
  let rNumber = Math.floor(Math.random() * count);

  document.getElementById('text').innerText = quotes[rNumber].text;
  document.getElementById('author').innerText = `-${quotes[rNumber].author}`;

  let randomNumberR = Math.floor(Math.random() * 256);
  let randomNumberG = Math.floor(Math.random() * 256);
  let randomNumberB = Math.floor(Math.random() * 256);

  let randomColor = `rgb(${randomNumberR},${randomNumberG},${randomNumberB})`;
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
}

btn.addEventListener('click', Change);
share.addEventListener('click', shareTweet);
function shareTweet() {
  let text = document.getElementById('text').innerText;

  window.location.href =
    'https://twitter.com/intent/tweet?hashtags=ünlüsözler&text=' +
    encodeURIComponent('"' + text + '"');
}
