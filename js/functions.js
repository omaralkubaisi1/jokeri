const jokeriTaulukko = document.getElementById("jokeri-taulukko");
const uusiRiviPainike = document.getElementById("uusi-rivi-painike");
const rivienLkmElementti = document.getElementById("rivien-lkm");

let arvottujenRivienLkm = 0;

uusiRiviPainike.addEventListener("click", () => {
  arvottujenRivienLkm++;

  // Uuden rivin luominen
  const uusiRivi = document.createElement("tr");

  // Sarakkeiden luominen ja numeroiden lisääminen
  for (let i = 0; i < 7; i++) {
    const sarake = document.createElement("td");
    sarake.textContent = Math.floor(Math.random() * 10);
    uusiRivi.appendChild(sarake);
  }

  // Uuden rivin lisääminen taulukkoon
  jokeriTaulukko.appendChild(uusiRivi);

  // Arvottujen rivien lukumäärän päivittäminen
  rivienLkmElementti.textContent = `Valmiita rivejä ${arvottujenRivienLkm}`;
});
