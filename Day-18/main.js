const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
//document.querySelectorAll('[data-time]')) butun li elemanlarini secer fakat map func kullanamayiz cunku array gibi hareket etmiyor
//array seklinde davranmasi icin Array.from() kullandik.
const seconds = timeNodes
.map(node => node.dataset.time)
.map(timeCode => {
  const [mins, secs] = timeCode.split(':').map(parseFloat); //dakika ve saniyeleri : isaretinden sonra ayirdik ve yuvarladik.
  return (mins * 60) + secs; //dakikalari saniye turune cevirdik.Dakika ve saniyeleri birlestirdik.
})
.reduce((total, vidSeconds) => total + vidSeconds);
//ECMAScript 5.1 ile gelen reduce fonksiyonu iki parametre alir.her bir elemani kadar reducer fonksiyonunu cagirir. Bu islemin sonucunu kumulatif olarak hesaplar. Yapilan her islemin sonucu bir sonraki fonksiyon cagirimina ilk parametre olarak aktarilir.
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
 //li elemanlarinin data-time icerdigi tum dakika ve saniyeleri alip 3600 bolup saat olarak arttirma islemi yapiyor .reduce fonk sayesinde