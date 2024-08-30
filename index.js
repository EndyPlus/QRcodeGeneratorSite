document.getElementById("submitBTN").addEventListener("click", () => {
  let qrCodeData = document.getElementById("pasteURL").value;
  let colorDarkValue = document.getElementById("chooseDarkColor").value;
  let colorLightValue = document.getElementById("chooseLightColor").value;

  document.getElementById("qrcode").innerHTML = "";

  // Генерація QR-коду
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: qrCodeData,
    width: 256, // Ширина QR-коду
    height: 256, // Висота QR-коду
    colorDark: colorDarkValue, // Колір QR-коду
    colorLight: colorLightValue, // Колір фону QR-коду
    correctLevel: QRCode.CorrectLevel.H, // Рівень корекції помилок
  });
  if (!qrCodeData || !qrCodeData.includes(".")) {
    document.getElementById("qrcode").innerHTML =
      '<img src="/assets/invalidurl.jpg" alt="invalidURL" />';
  }
  console.log(document.getElementById("qrcode").innerHTML);
});
