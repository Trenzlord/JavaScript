window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true; //konusmaya devam ederken cogaltmaya devam ediyor.
recognition.lang = 'en-US'; // dil tercihi degistirilebilir.

let p = document.createElement('p'); //p tag olusturduk.
const words = document.querySelector('.words'); //div classi secildi
words.appendChild(p); // classi words olan div tagi icine p tagi olarak eklendi soylenen kelimeler.

recognition.addEventListener('result', e => { //
  const transcript = Array.from(e.results) //dizi haline getirildi ve event icinden sonuclar alindi.
    .map(result => result[0])//dizi ilk elemani soylenen
    .map(result => result.transcript)
    .join('');//soylenen cumle bitene kadar stringleri pes pese ekliyor. 

    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩'); // bu kelimeler soylenince poo emojisi cikiyor. :)
    p.textContent = poopScript;

    if (e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }
});

recognition.addEventListener('end', recognition.start);  // bitene kadar 

recognition.start();