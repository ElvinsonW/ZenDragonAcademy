
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
        document.getElementById("desc").innerHTML="The Fire class dragon's egg is a captivating sight, adorned with swirling patterns resembling flickering flames. Its shell, though tough, emits a gentle warmth that beckons curiosity. With a light touch, one can feel the soothing heat beneath its surface. In darkness, it glows softly, offering a comforting presence. Those who approach feel a sense of reverence, as if in the presence of a powerful force of nature waiting to be unleashed.";
    }
    else if(elemenKe == 2){
        document.getElementById("desc").innerHTML="Imbued with the power of swirling winds and untamed air currents, the Wind Class Dragon Egg is a marvel to behold. Its shell, adorned with delicate patterns reminiscent of whirling gusts, hints at the elemental force within. This egg almost weightless feel. If you were to hold it in your palm, you might sense a gentle vibration, it also could emit a protective aura, shielding it from harm or detection by those who would seek to harm or steal it.";
    }
    else if(elemenKe == 3){
        document.getElementById("desc").innerHTML="The water class dragon egg could be characterized by its shimmering, aqua-blue shell, which is hard and smooth to the touch. It might have a pattern resembling flowing water or waves, signifying its affinity with aquatic environments.  This egg could regulate its internal temperature, ensuring the optimal conditions for the development of the embryo regardless of external environmental factors.";
    }
    else if(elemenKe == 4){
        document.getElementById("desc").innerHTML=" The Earth Class Dragon Egg exudes an aura of solidity and endurance, reflecting the unwavering resilience of its future inhabitant.  Its bears unique characteristics that set it apart from all others. Its shell, composed of layers deposits fused over centuries, boasts an extraordinary hardness, symbolizing the enduring resilience of the earth itself. This innate strength protects the life growing within and serves as a testament to the untamed power of nature.";
    }
    else if(elemenKe == 5){
        document.getElementById("desc").innerHTML="The Deviant Class Dragon’s Egg doesn’t have the same characteristics for each egg. Each egg not bound by the conventional elements that shape the world, but rather pulsates with the essence of a cosmic force so rare. They are said to possess powers that transcend the boundaries of reality itself, manipulating the very fabric of existence with a mere thought. Indeed, no one knows for certain the characteristics of this class of egg, which is what makes it exceedingly rare.";
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
            menu.style.opacity = 1;
            menu.style.width = 150 + "px"
        } else {
            menu.style.opacity = 0;
            menu.style.width = 0 + "px"
        }
    });
});
