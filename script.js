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

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin");
const resultDiv = document.getElementById("result");

const segmentCount = hocalar.length;
const segmentAngle = 360 / segmentCount;

let currentRotation = 0;

// Çark dilimlerini oluştur
hocalar.forEach((hoca, i) => {
  const slice = document.createElement("div");
  slice.className = "slice";
  slice.style.transform = `rotate(${segmentAngle * i}deg) skewY(-${90 - segmentAngle}deg)`;
  slice.style.backgroundColor = i % 2 === 0 ? "#3498db" : "#2980b9";
  slice.textContent = hoca;
  wheel.appendChild(slice);
});

function spin() {
  spinBtn.disabled = true;
  resultDiv.textContent = "";

  // Rastgele bir tur sayısı ve açı belirle
  const spins = Math.floor(Math.random() * 5) + 5; // 5-9 tur arası
  const extraDegrees = Math.floor(Math.random() * 360);
  const totalRotation = spins * 360 + extraDegrees;

  currentRotation = (currentRotation + totalRotation) % 360;

  // Çarkı döndür
  wheel.style.transition = "transform 4s cubic-bezier(0.33, 1, 0.68, 1)";
  wheel.style.transform = `rotate(${currentRotation}deg)`;

  // Sonucu 4 saniye sonra göster
  setTimeout(() => {
    spinBtn.disabled = false;

    // Hangi segment çıktı hesapla
    const degreesFromTop = (360 - (currentRotation % 360)) % 360;
    const index = Math.floor(degreesFromTop / segmentAngle);
    const secilenHoca = hocalar[index];
    resultDiv.textContent = `🎉 Çıkan Hoca: ${secilenHoca}`;
  }, 4000);
}

spinBtn.addEventListener("click", spin);
