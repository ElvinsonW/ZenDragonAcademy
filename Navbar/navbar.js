function navClick(navKe){
    // navbar
    // Menghilangkan kelas 'selected' dari semua elemen <a> di dalam .menu
    document.querySelectorAll('.menu li a').forEach(function(a) {
        a.classList.remove('selected');
    });

    // Menambahkan kelas 'selected' ke elemen <a> di dalam <li> yang diklik
    var clickedLi = document.querySelector('.menu li:nth-child(' + navKe + ')');
    var clickedA = clickedLi.querySelector('a');
    if (!clickedA.classList.contains('selected')) {
        clickedA.classList.add('selected');
    }
}


// untuk navbar
document.addEventListener("DOMContentLoaded", function () {
    // side bar
    const checkbox = document.getElementById("menu-toggle");
    const menu = document.querySelector(".menu");

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            menu.classList.add("active")
        } else {
            menu.classList.remove("active")
        }
    });
});
