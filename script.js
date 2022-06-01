// Get the share-img div
let divShare = document.querySelector(".share-img");
console.log(divShare);

// Get the icon-share img
let imgShare = document.querySelector("#icon-share");

// Get the none div
let noneDisplay = document.querySelector("#none");

// Get the social div
let divSocial = document.querySelector(".social")

// Get the close div
let divClose = document.querySelector(".for-close");


// Add onclick event to "divShare"
divShare.onclick = () => {
    noneDisplay.style.display = "block";
    divClose.style.display = "block";
    imgShare.src = "icon-share1.svg";
    divSocial.style.backgroundColor = "var(--VDGB)";
}


divClose.onclick = function() {
    divClose.style.display = "none";
    noneDisplay.style.display = "none";
    imgShare.src = "icon-share.svg";
    divSocial.style.backgroundColor = "var(--LGB)";

}