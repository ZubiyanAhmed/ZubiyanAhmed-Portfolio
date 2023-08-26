// ALERT FOR SUBMIT BUTTON
let btn = document.querySelector(".submit");
btn.addEventListener("click", showMsg);

function showMsg() {
  alert("Chal nikal by");
}

// CV BUTTON JS
document.getElementById("CVbutton").addEventListener("click", function () {
  window.open("../../../../PICS + Docs/Resume/Zubiyan CV.pdf", "_blank");
});

// Meta BUTTON JS
document.getElementById("meta-btn").addEventListener("click", function () {
  window.open(
    "../../../../PICS + Docs/Certificates/META Coursera Certificate 1- Front-End Web Development.pdf",
    "_blank"
  );
});
// FreeCodeCamp BUTTON JS
document.getElementById("FCC-btn").addEventListener("click", function () {
  window.open("../../../../PICS + Docs/Certificates/Freecodecamp3-min.jpg");
});
// Microsoft BUTTON JS
document.getElementById("Microsoft-btn").addEventListener("click", function () {
  window.open("../../../../PICS + Docs/Certificates/CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn.pdf");
});

// CONTACT BTN JS
document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.getElementById("contact-btn");
  const contactSection = document.getElementById("contact");

  contactButton.addEventListener("click", function () {
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});
