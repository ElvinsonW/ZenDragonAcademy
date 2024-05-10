
// Untuk dragon classes
function changeImage(filename, elemenKe){
    let img = document.querySelector("#gambar-elemen");
    img.setAttribute("src", filename);
    
    // Menghilangkan kelas 'clicked' dari semua gambar
    document.querySelectorAll('.element img').forEach(function(img) {
        img.classList.remove('clicked');
    });

    // Menambahkan kelas 'clicked' ke gambar yang diklik
    var kecil = document.querySelector('.element li:nth-child(' + elemenKe + ') img');
    kecil.classList.add('clicked');

    if(elemenKe == 1){
        document.getElementById("desc").innerHTML="The Fire Class Dragon is a formidable force of nature, embodying the relentless power of flames. With a mere exhale, it can unleash torrents of scorching fire, turning all in its path to ash. Its very presence raises the temperature, igniting the air around it and creating an inferno that consumes all in its vicinity. Masters of combustion, these dragons can manipulate flames at will, shaping them into devastating firestorms or precise blasts of searing heat.";
    }
    else if(elemenKe == 2){
        document.getElementById("desc").innerHTML="The Wind Class Dragon emerges as a majestic embodiment of ethereal power. Its form, an elegant symphony of sinuous grace, dances upon the winds with effortless fluidity. With wings that span vast expanses, it commands the very essence of air, shaping gusts into tempests or gentle zephyrs with a mere flick of its tail. Eyes gleaming with the clarity of the skies, it navigates the heavens with unmatched agility, harnessing the boundless energy of the atmosphere.";
    }
    else if(elemenKe == 3){
        document.getElementById("desc").innerHTML="The Water Class Dragon, a formidable entity whose mastery over water is unparalleled. With a mere thought, it can manipulate rivers, lakes, and seas alike, bending them to its will. This dragon is the embodiment of fluidity and adaptability, able to shape water into powerful torrents, swirling vortexes, or tranquil pools. Its control over the element extends to the very molecules, allowing it to freeze water into solid barriers or evaporate it into mist. ";
    }
    else if(elemenKe == 4){
        document.getElementById("desc").innerHTML="The Earth Class Dragon embodies the very essence of stability and resilience. Born from the bedrock of ancient mountains, their connection to the earth imbues them with unparalleled defensive capabilities. Their scales are as impenetrable as fortress walls, capable of withstanding the fiercest of assaults. These dragons can call upon the very ground beneath them, shaping it into towering barriers or earthen shields, rendering themselves and their allies virtually invulnerable.";
    }
    else if(elemenKe == 5){
        document.getElementById("desc").innerHTML="The Deviant Class Dragon is a mesmerizing anomaly, diverging from elemental norms with an aura of mystery and unpredictability. Its form, sleek and iridescent, hints at ancient wisdom and futuristic innovation. Unbound by elemental constraints, it possesses abilities that defy classification—rumored to bend reality and weave illusions. Some see it as a guardian of ancient secrets, others as a herald of transformation.";
    }
}

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
