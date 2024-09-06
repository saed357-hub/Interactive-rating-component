let li = document.querySelectorAll(".li");

for (let i = 0; i < 5; i++) {
    li[i].addEventListener('click', function () {
        li.style.backgroundColor = "hsl(0, 0%, 100%)";
        li.style.color = "hsl(212, 17%, 21%)";
    });
}