document.addEventListener("DOMContentLoaded",main);

function main(){
let r=document.querySelector("#flagInfo #Btns #red-btn");
let b=document.querySelector('#blk-btn');
let g=document.querySelector('#green-btn');
let w=document.querySelector('#flagInfo #Btns #white-btn');
let flagArr=["The red stripe symbolizes the blood shed during the fight for independence from British colonial rule. It also represents the sacrifices made by Kenyan freedom fighters.",
"The black stripe represents the people of Kenya. It symbolizes the struggles they have faced in the past, as well as their determination to move forward and build a better future.",
"The green stripe represents the country's natural wealth and agriculture. It signifies the fertile land and the hope for a prosperous future.",
"The white stripes represent peace and honesty. They also stand for the unity that has been maintained among Kenya's diverse ethnic groups. "
];
r.addEventListener("click",function (){//Adds event listener for click on red btn
let place=document.querySelector('#flagInfo .flg-text p');
place.textContent=flagArr[0];

place.style.color="red";

}
);
b.addEventListener("click",function (){//Adds event listener for click on black btn
    let place=document.querySelector('#flagInfo .flg-text p');
    place.textContent=flagArr[1];
    place.style.color="black";
    }
);
g.addEventListener("click",function (){//Adds event listener for click on green btn

    let place=document.querySelector('#flagInfo .flg-text p');
    place.textContent=flagArr[2];
    place.style.color="green";
    }
);
w.addEventListener("click",function (){//Adds event listener for click on white btn
    let place=document.querySelector('#flagInfo .flg-text p');

    place.textContent=flagArr[3];
    place.style.color="white";

    }
);
}