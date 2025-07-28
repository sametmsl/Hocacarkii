const hocalar = [
  "MERAL BABACAN (CANIM HOCAM)",
  "CEM (TARLA FARESİ)",
  "TARİHÇİ (G*Y)",
  "AHMET (KIRGINLIK)",
  "MERVE ÜRER (ABDÜL BASİT ADAM)",
  "DİLARA (ÖZLEDİK)",
  "DİLEK (KÖR)",
  "SEZİN (GERİ DÖN ŞEF!)",
  "HÜMEYRA (SG)",
  "ÖZLEM BÖLÜKBAŞ (GÖĞSÜNÜN DARALDIĞINI BİLİYORUZ)",
  "HANİFE (PELTEK)",
  "KOMUTAN",
  "RESİMCİ (ADINI UNUTTUM)",
  "SEZGİN (UKTE)",
  "MEHMET ORTATEPE (👑)",
  "MUAMMER",
  "AVNİ",
  "ZÜBEYDE",
  "MURAT",
  "İSMAİL KARTAL",
  "EYÜP"
];

function cevir() {
  const rastgele = Math.floor(Math.random() * hocalar.length);
  const secilen = hocalar[rastgele];
  document.getElementById("sonuc").innerText = secilen;
}
