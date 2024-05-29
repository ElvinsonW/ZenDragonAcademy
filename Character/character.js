
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
        document.getElementById("character-name").innerHTML = "Ignatius Rey"
        document.getElementById("desc").innerHTML="Ignatius Rey is a spirited and courageous fire dragon tamer, known for his boundless energy and adventurous spirit. With his tousled, fiery red hair and striking blue eyes that blaze with determination, Ignatius exudes a vibrant and fearless aura. Ignatius can summon flames at will, shaping them into various forms such as fireballs, streams of fire, or protective fire shields. His control over fire allows him to adjust the intensity and heat of the flames. Despite his youth, Ignatius possesses remarkable bravery and quick reflexes, making him a formidable opponent in battle. His resourcefulness and quick thinking enable him to adapt to any situation.";
    }
    else if(elemenKe == 2){
        document.getElementById("character-name").innerHTML = "Lareina Aqua"
        document.getElementById("desc").innerHTML="Lareina Aqua is a renowned dragon tamer with a deep connection with water element dragons. With her flowing azure hair and deep blue eyes, she exudes an aura of tranquility and strength. Lareina possesses an innate ability to communicate with and command water dragons. Her mastery of water magic not only enhances her combat prowess but also allows her to heal and protect. She can summon torrents of water, create formidable waves, and conjure soothing rains to aid allies. Lareina's wisdom and empathy enable her to understand the needs and emotions of her dragons, fostering relationships built on trust and mutual respect.";
    }
    else if(elemenKe == 3){
        document.getElementById("character-name").innerHTML = "Rocky Ge Rung"
        document.getElementById("desc").innerHTML="Rocky Ge Rung is a formidable dragon tamer known for his profound connection with earth element dragons. A master of earth magic, Rocky commands the very ground beneath his feet. He can summon towering walls of stone, create protective barriers, and unleash devastating tremors in battle. Rocky's deep understanding of the earth dragons' nature allows him to forge powerful, symbiotic relationships with them. His patience and strength make him an unparalleled mentor to aspiring tamers, teaching them to listen to the whispers of the stones and the heartbeat of the mountains.";
    }
    else if(elemenKe == 4){
        document.getElementById("character-name").innerHTML = "Flowy Bromm"
        document.getElementById("desc").innerHTML="Flowy Bromm is a captivating dragon tamer with an exceptional affinity for wind element dragons. Her long, flowing green hair and vivid emerald eyes reflect the boundless energy and grace of the wind. Flowy can summon powerful gusts, create protective air barriers, and manipulate the weather to her advantage. Her abilities enable her to glide effortlessly and maneuver with agility, making her a formidable presence in any battle. She often uses her magic to communicate with the natural world, understanding the whispers of the wind and the rustling of leaves. Flowy's serene and free-spirited nature endears her to both dragons and humans alike. ";
    }
    else if(elemenKe == 5){
        document.getElementById("character-name").innerHTML = "Lavenderia"
        document.getElementById("desc").innerHTML="Lavenderia emerges as a formidable figure, renowned as a dragon tamer of unparalleled skill. With a mystique as intoxicating as her namesake flower, Lavenderia possesses a unique bond with poison element dragons, their venomous essence flowing harmoniously with her own. Lavenderia can commune with the very essence of toxicity, sensing its presence in the air and soil. With a whispered command, she can call forth clouds of noxious gas or imbue her allies' weapons with venomous potency. She is also a healer of remarkable skill, using her deep understanding of poisons to concoct antidotes and salves that defy conventional medicine.";
    }
}