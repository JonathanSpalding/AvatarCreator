// takes a series of pre-validated parameters, creates a new object, adds the object to the internal list, and returns the new object.
function CreateItem() {
    var maleWhite = document.getElementById("avatar").src = "../img/spritesMaleWhite.jpg";
    var maleBrown = document.getElementById("avatar").src = "../img/spritesMaleBrown.png";
    var maleBlack = document.getElementById("avatar").src = "../img/spritesMaleBlack.png";

    var femaleWhite = document.getElementById("avatar").src = "../img/spritesFemaleWhite.png";
    var femaleBrown = document.getElementById("avatar").src = "../img/spritesFemaleBrown.png";
    var femaleBlack = document.getElementById("avatar").src = "../img/spritesFemaleBlack.png";
}
// returns an array of all the items in the list.
function GetAllItems() {

}
// takes a series of pre-validated parameters, creates a new object, adds the object to the internal list, and returns the new object.
function GetItemByID() {
    var form = document.forms["editForm"];
    // If else statement to see what avatar to use.
    if (document.getElementById("genderMaleRadio").checked && form.skinColor.selectedIndex == 0) {
        document.getElementById("avatar").src = "../img/spritesMaleWhite.jpg";
    } else if (document.getElementById("genderMaleRadio").checked && form.skinColor.selectedIndex == 1) {
        document.getElementById("avatar").src = "../img/spritesMaleBrown.png";
    } else if (document.getElementById("genderMaleRadio").checked && form.skinColor.selectedIndex == 2) {
        document.getElementById("avatar").src = "../img/spritesMaleBlack.png";
    } else if (document.getElementById("genderFemaleRadio").checked && form.skinColor.selectedIndex == 0) {
        document.getElementById("avatar").src = "../img/spritesFemaleWhite.png";
    } else if (document.getElementById("genderFemaleRadio").checked && form.skinColor.selectedIndex == 1) {
        document.getElementById("avatar").src = "../img/spritesFemaleBrown.png";
    } else if (document.getElementById("genderFemaleRadio").checked && form.skinColor.selectedIndex == 2) {
        document.getElementById("avatar").src = "../img/spritesFemaleBlack.png";
    }
}