const buttons = document.querySelectorAll(".button");
const wrapperHolder = document.querySelector(".wrapper-holder");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Matikan animasi auto
    wrapperHolder.style.animation = "none";

    // Geser ke posisi sesuai tombol
    wrapperHolder.style.transform = `translateX(-${index * 100}%)`;

    // Bikin tombol aktif keliatan
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
