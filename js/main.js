const closeBtn = $("#closeBtn");
const openBtn = $("#openBtn");
const sideBar = $(".side-bar");
const singerBtn = $(".singer .btn");
const textarea = $("textarea");
const messageCounter = $(".message-counter");
const navLinks = $(".side-bar a");

function toggleMenu(action) {
  action == "close"
    ? sideBar.animate({ left: "-250px" }, 300)
    : sideBar.animate({ left: "0" }, 300);
}

function setTimer() {
  const eventDate = new Date();
  eventDate.setFullYear(2024, 6, 27);
  const currentDate = new Date();
  let eventDay = eventDate.getDate();
  let currentDay = currentDate.getDate();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  $("#date .days").html(`${eventDay - currentDay}D`);
  $("#date .hours").html(`${hours}H`);
  $("#date .minutes").html(`${minutes}M`);
  $("#date .seconds").html(`${seconds}S`);
}

$(() => {
  closeBtn.on("click", () => {
    toggleMenu("close");
  });

  openBtn.on("click", () => {
    toggleMenu("open");
  });

  singerBtn.on("click", (e) => {
    let currentBtn = $(e.currentTarget);
    let currentDetails = currentBtn.next();
    let allDetails = singerBtn.next();

    currentDetails.slideToggle(300);
    allDetails.not(currentDetails).slideUp(300);
  });

  setInterval(setTimer, 1000);

  textarea.on("input", () => {
    const msgLimitedWords = 100;
    let msgLength = textarea.val().length;
    let msgWords = msgLimitedWords - msgLength;
    if (msgWords <= 0) {
      messageCounter.html(`Your available character finished`);
      $(".characters").addClass("d-none");
    } else if (msgWords < msgLimitedWords) {
      messageCounter.html(msgWords);
      $(".characters").removeClass("d-none");
    }
  });

  navLinks.on("click", (e) => {
    e.preventDefault();
    let eleTop = $(`#${$(e.target).text().toLowerCase()}`).offset().top;
    $("html, body").animate({ scrollTop: eleTop }, 500);
  });
});
