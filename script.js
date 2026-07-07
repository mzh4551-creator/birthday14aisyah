const gift = document.getElementById("gift");
const surat = document.getElementById("surat");

gift.addEventListener("click", function () {

    gift.style.transform = "scale(1.3) rotate(15deg)";

    setTimeout(() => {
        gift.innerHTML = "🎉";
        surat.classList.remove("hidden");
    }, 500);

});
