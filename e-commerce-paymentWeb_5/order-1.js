const moreP = document.querySelector(".more-p");
//product description variabels
const add = document.querySelector(".plusBtn");

const descript = document.querySelector("#pills-home-tab");
const Profile = document.querySelector("#pills-profile-tab");
const Use = document.querySelector("#pills-contact-tab");

//size variables
const mrp = document.querySelector("#MRP");
const fstSz = document.querySelector(".szFs");
const sndtSz = document.querySelector(".szSn");
const trdSz = document.querySelector(".szTr");
const forSz = document.querySelector(".szFr");

//Size Function

fstSz.style.border = "1px solid rgb(87, 87, 87)";

fstSz.style.background="transparent";
fstSz.style.borderRadius="0";
function mrp1(){
    let num= "$20";
    //console.log(num);
    document.getElementById("mrP").innerHTML = num;

    fstSz.style.border = "1px solid rgb(87, 87, 87)";
    fstSz.style.borderRadius="0";
    fstSz.style.background="transparent";

    sndtSz.style.border = "none";

    trdSz.style.border = "none";

    forSz.style.border = "none";
}

function mrp2(){
    let num2= "$18";
    //console.log(num2);
    document.getElementById("mrP").innerHTML = num2;

    sndtSz.style.border = "1px solid rgb(87, 87, 87)";
    sndtSz.style.borderRadius="0";
    sndtSz.style.background="transparent";

    fstSz.style.border = "none";

    trdSz.style.border = "none";

    forSz.style.border = "none";
}

function mrp3(){
    let num3= "$24";
    //console.log(num2);
    document.getElementById("mrP").innerHTML = num3;

    trdSz.style.border = "1px solid rgb(87, 87, 87)";
    trdSz.style.borderRadius="0";
    trdSz.style.background="transparent";

    fstSz.style.border = "none";

    sndtSz.style.border = "none";

    forSz.style.border = "none";
}

function mrp4(){
    let num4= "$13";
    //console.log(num2);
    document.getElementById("mrP").innerHTML = num4;

    forSz.style.border = "1px solid rgb(87, 87, 87)";
    forSz.style.borderRadius="0";
    forSz.style.background="transparent";

    fstSz.style.border = "none";

    sndtSz.style.border = "none";

    trdSz.style.border = "none";
}

//Read More Function
function readMore(){
    moreP.style.display="block";
}
function readMore2(){
    moreP.style.display="none";
}

//Quantity Add Function
   
var i = 1;
    //Adition
    function plusAdd() {
        if (i < 10) {
            i++;
        } else if (i = 10) {
            i = 1;
        }
        document.getElementById("inc").innerHTML = i;
    }
    //Substraction
    function minSub() {
        if (i > 1) {
            --i;
        } else if (i = 1) {
            i = 10;
        }
        document.getElementById("inc").innerHTML = i;
    }
//console.log(i);

//Product Description

descript.style.background="rgb(226, 33, 139)";
descript.style.borderRadius="0";

function description(){
    descript.style.background="rgb(226, 33, 139)";
    descript.style.borderRadius="0";

    Profile.style.background="transparent";
    Profile.style.border="none";
    Profile.style.outline="none";

    Use.style.background="transparent";
    Use.style.border="none";
    Use.style.outline="none";
    
}

function profile(){
    Profile.style.background="rgb(226, 33, 139)";
    Profile.style.borderRadius="0";

    descript.style.background="transparent";
    descript.style.border="none";
    descript.style.outline="none";

    Use.style.background="transparent";
    Use.style.border="none";
    Use.style.outline="none";
    
}

function use(){
    Use.style.background="rgb(226, 33, 139)";
    Use.style.borderRadius="0";

    descript.style.background="transparent";
    descript.style.border="none";
    descript.style.outline="none";

    Profile.style.background="transparent";
    Profile.style.border="none";
    Profile.style.outline="none";
    
}

//Size With MRP


