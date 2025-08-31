var typed=new Typed(".text",{
    strings:["Frontend Developer","UI/UX Designer","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

(function () {
  emailjs.init("cpiGvZ-q8lhQnBn2p"); 
})();

document.getElementById("contactform").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_z7mwhey", "template_xzliid4", this)
    .then(function () {
      alert("Message Sent ✅");
      document.getElementById("contactform").reset();
    })
    .catch(function (error) {
      alert("Failed ❌ " + JSON.stringify(error));
    });
});
