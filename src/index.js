const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const binToChar = {
  10: '.',
  11: '-',
};

function decode(expr) {
  const chunks = [];
  for (let i = 0; i < expr.length; i += 10) {
    const chunk = [];
    for (let j = i; j < i + 10; j += 2) {
      const smallChunk = expr.slice(j, j + 2);
      chunk.push(smallChunk);
    }
    chunks.push(chunk);
  }

  const letters = [];

  for (const chunk of chunks) {
    if (chunk.every((code) => code === '**')) {
      letters.push(' ');
      continue;
    }
    let encodedLetter = '';
    for (const code of chunk) {
      if (binToChar[code]) {
        encodedLetter += binToChar[code];
      }
    }
    letters.push(MORSE_TABLE[encodedLetter]);
  }

  return letters.join('');
}

module.exports = {
  decode,
};
