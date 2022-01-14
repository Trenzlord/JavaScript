<<<<<<< HEAD
let textInput = document.querySelector("#textInput")
let addText = document.querySelector("#addText")
let list = document.querySelector("#list")
let defaultLi = document.getElementsByTagName("li")

list.addEventListener("click", deleteElement)

//Ekle butonuna basildigi zaman kontrol saglayip kayit islemini yapmak icin 
addText.onclick = function () {
    if (textInput.value != "" && textInput.value != null) {
        createItem()
        textInput.value = ""
        makeTrueAlert()
    } else
        makeFalseAlert()
}


//yeni eleman olusturma
function createItem() {
    createX()
    localStorage.setItem('save', textInput.value)
}
//eleman cagirma
function getValue() {
    return localStorage.getItem('save')
}
//eleman silme
function deleteItem() {
    localStorage.removeItem('save')
}
//hali hazirda bulunan liste elemanlarina X butonu ekledik.
for (let i = 0; i < defaultLi.length; i++) {
    if (defaultLi[i].className == "close") {
        console.log("error")
    } else {
        let span = document.createElement("span")
        span.classList.add("close")
        span.innerHTML = "X"
        defaultLi[i].appendChild(span)
        console.log("test")
    }
}
//Eklenen yeni elemanlara X isareti koymak icin
function createX() {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerHTML = "X"
    span.classList.add("close")
    li.innerHTML = `<span>${textInput.value} </span> `
    li.appendChild(span)
    list.appendChild(li)
}
//Basarili kayit islemleri icin 
function makeTrueAlert() {
    var myAlert = document.getElementById('toastNotice');
    var bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
}
//Hatalı kayit islemleri icin 
function makeFalseAlert() {
    var myAlert = document.getElementById('toastNoticeX');
    var bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
}
// X isareti elemani ile kayit silmek icin
function deleteElement(e) {
    if (e.target.className === "close") {
        if (confirm("Are you Sure ?")) {
            e.target.parentElement.remove()
        }
    }
}
=======
window.addEventListener('keydown',function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add("playing")
})
function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
>>>>>>> 25609e3 (Vanilla js try)
