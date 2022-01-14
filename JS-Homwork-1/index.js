//kullanicidan bilgi alma kismi
let name1 = prompt("Please Enter Your Name : ")
document.getElementById("namejs").innerHTML = name1

//Guncel tarih yazdirma kismi

window.onload = startTime;
function startTime()
{
 var today=new Date();
 var h=today.getHours();
 var m=today.getMinutes();
 var s=today.getSeconds();

 var days1 = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];

 h=checkTime(h);
 m=checkTime(m);
 s=checkTime(s);
 document.getElementById('date').innerHTML=h+":"+m+":"+s+" "+days1[today.getDay()];
 t=setTimeout('startTime()',1000);
}

function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;

}
