const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// inbox class i icindeki input tipi checkbox olanların hepsini dokumandan sectik.

let lastChecked;
// son isaretlenen checkbox icin bir degisken olusturduk.


function handleCheck(e) {
    let inBetween = false; 
    // shitf tusuna basildiginda arada kalan checkboxlar icin tipi boolean olan bir degisken olusturduk.
    if (e.shiftKey && this.checked) { 
        //eventin shift tusuna basildiginda ve bu fonksiyon secildiginde forEach ile sunları yap 
        checkboxes.forEach(checkbox => {
            console.log(checkbox); 
            // calistigini anlamak ve loglara cikti vermek icin yazdik.
            if (checkbox === this || checkbox === lastChecked) {
                // checkbox elemani bu elemana esitse veya checkbox elemanı son secilene esitse 
                inBetween = !inBetween;  // inBetween degiskeni true olarak degistirdik.
            }
            if (inBetween) {
                //inBetween degiskeni true ise shift tusu arasında kalan checkboxlari isaretle check et dedik yani true dondurduk.
                checkbox.checked = true;
            }
        })
    }
   lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck)); 

