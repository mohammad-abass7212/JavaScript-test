const endDate = "5 December 2022 10:51 Pm";
document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input");

const counter = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff < 0) return;
  input[0].value = Math.floor(diff / 3600 / 24);
  input[1].value = Math.floor(diff / 3600) % 24;
  input[2].value = Math.floor(diff / 60) % 60;
  input[3].value = Math.floor(diff) % 60;
};
counter();

setInterval(() => {
  counter();
}, 1000);
