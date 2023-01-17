const url = document.getElementById("url");
const btn = document.getElementById("btn");
let QRCodeDiv = document.getElementById("qrcode");

btn.onclick = () => {
  QRCodeDiv.innerHTML = "";
  QRCodeDiv.classList.remove("p-8");
  QRCodeDiv.parentElement.classList.remove(
    "my-3",
    "px-4",
    "border",
    "rounded-md"
  );

  // check input value is false or true
  if (!url.value) {
    return false;
  }
  QRCodeDiv.classList.add("p-8");
  QRCodeDiv.parentElement.classList.add("my-3", "px-4", "border", "rounded-md");

  /***
   * use third party url
   * website: https://davidshimjs.github.io/qrcodejs/
   * format : @format new QRCode(showDiv, QR-value)
   */
  new QRCode(QRCodeDiv, url.value);

  
};
