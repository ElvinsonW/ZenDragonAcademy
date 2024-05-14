let bijiKe=1;
function biji(idx){
    document.querySelectorAll('.bidji').forEach(function(div) {
        div.classList.remove('bidji');
        div.classList.add('biji');
    });
    var img = "../Asset/img/gambar" + idx + ".png";
    document.getElementById('biji' + idx).classList.add('bidji');
    bijiKe = idx;
    document.getElementById('gambar-denah').setAttribute("src", img);

    
    if(bijiKe == 1){
        document.getElementById("desc").innerHTML="Everything began during a decade of resignation and darkness that had plagued the continent of Doriyom. Amidst the oppressive gloom of solar eclipses and the relentless tyranny of evil that haunted the land, something extraordinary occurred. On a small island called the Isle of Berk, a dazzling light emerged, bringing with it a glimmer of hope!";
    }
    else if(bijiKe == 2){
        document.getElementById("desc").innerHTML="For ten long years, the people of Doriyom lived under a shadow, their days marked by the absence of sunlight and the presence of fear. The solar eclipses were a constant reminder of their despair, as the darkness seemed to swallow any trace of joy or life. The continent had fallen under the grip of malevolent forces, whose rule was characterized by cruelty and oppression. The inhabitants, once vibrant and full of life, had succumbed to a state of hopelessness, with each passing day feeling like an eternity.";
    }
    else if(bijiKe == 3){
        document.getElementById("desc").innerHTML="This miraculous light brought with it the prospect of change and the possibility of reclaiming their land from the clutches of evil. The Isle of Berk became the beacon of hope for the entire continent. It was here that a remarkable initiative was born—a dragon academy, spearheaded by a visionary named Professor Tolkien. Together, they envisioned an academy where both warriors and dragons could be trained to reach their zenith, achieving a state of ultimate harmony and strength.";
    }
    else if(bijiKe == 4){
        document.getElementById("desc").innerHTML="Under the guidance of Professor Tolkien, the academy quickly became a sanctuary of learning and empowerment. Warriors from all corners of the continent flocked to the Isle of Berk, eager to learn and to fight for the liberation of their homeland. The bond between the warriors and their dragons grew stronger with each passing day, forging an alliance that would be crucial in the battles to come.";
    }
}

function bijii(move){
    bijiKe = bijiKe+move;
    if(bijiKe == 5) bijiKe = 1;
    else if(bijiKe == 0) bijiKe = 4;

    document.querySelectorAll('.bidji').forEach(function(div) {
        div.classList.remove('bidji');
        div.classList.add('biji');
    });
    var img = "../Asset/img/gambar" + bijiKe + ".png";
    document.getElementById('biji'+bijiKe).classList.add('bidji');
    document.getElementById('gambar-denah').setAttribute("src",img);

    
    if(bijiKe == 1){
        document.getElementById("desc").innerHTML="The Fire Class Dragon is a formidable force of nature, embodying the relentless power of flames. With a mere exhale, it can unleash torrents of scorching fire, turning all in its path to ash. Its very presence raises the temperature, igniting the air around it and creating an inferno that consumes all in its vicinity. Masters of combustion, these dragons can manipulate flames at will, shaping them into devastating firestorms or precise blasts of searing heat.";
    }
    else if(bijiKe == 2){
        document.getElementById("desc").innerHTML="The Wind Class Dragon emerges as a majestic embodiment of ethereal power. Its form, an elegant symphony of sinuous grace, dances upon the winds with effortless fluidity. With wings that span vast expanses, it commands the very essence of air, shaping gusts into tempests or gentle zephyrs with a mere flick of its tail. Eyes gleaming with the clarity of the skies, it navigates the heavens with unmatched agility, harnessing the boundless energy of the atmosphere.";
    }
    else if(bijiKe == 3){
        document.getElementById("desc").innerHTML="The Water Class Dragon, a formidable entity whose mastery over water is unparalleled. With a mere thought, it can manipulate rivers, lakes, and seas alike, bending them to its will. This dragon is the embodiment of fluidity and adaptability, able to shape water into powerful torrents, swirling vortexes, or tranquil pools. Its control over the element extends to the very molecules, allowing it to freeze water into solid barriers or evaporate it into mist. ";
    }
    else if(bijiKe == 4){
        document.getElementById("desc").innerHTML="The Earth Class Dragon embodies the very essence of stability and resilience. Born from the bedrock of ancient mountains, their connection to the earth imbues them with unparalleled defensive capabilities. Their scales are as impenetrable as fortress walls, capable of withstanding the fiercest of assaults. These dragons can call upon the very ground beneath them, shaping it into towering barriers or earthen shields, rendering themselves and their allies virtually invulnerable.";
    }
}