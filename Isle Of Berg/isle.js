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