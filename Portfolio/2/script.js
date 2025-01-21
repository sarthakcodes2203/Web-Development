// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("collapsible--expanded");
//   })
// );

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
}))


// function sendEmail(){
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "akashdutta.business96@gmail.com",
//     Password : "3557A9EADA38E62CA92D4344005EACB43C8D",
//     To : 'akashdutta.business96@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
// }