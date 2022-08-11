const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789012345678901234567890123456789!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=";

function generatePasswordOnClick() {
  const passwordLength = 12;
  var finalPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var generatingThePassword = chars.charAt(Math.floor(Math.random() * chars.length));
    finalPassword += generatingThePassword;
  }
  document.getElementsByClassName("password-input-value")[0].value = finalPassword;
}

function copyToClipboard() {
  var copyText = document.getElementsByClassName("password-input-value")[0];
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
}
