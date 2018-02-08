function onPageLoad() {
    // Wire up all button handlers
    document.getElementById('createBtn').onclick = onCreateBtnClicked;
    document.getElementById('cancelBtn').onclick = onCancelBtnClicked;
    document.getElementById('newBtn').onclick = onNewBtnClicked;
    document.getElementById("avatar").src = "../img/sprites1.jpg";
}

function onCreateBtnClicked(){
    // Validate the data in all the controls.
    if (!validateControls()) {
        return;
    }

    // Get the data from the form controls.
    var form = document.forms["editForm"];

    // Add the image of the Avatar to the view.

    // Clear the input form and all errors.
    clearInputForm()
}

function onNewBtnClicked() {
    document.getElementById("formTitle").innerHTML = "Customize Avatar";

    // Show the form and hide the display area.
    document.getElementById("avatarCreationArea").style.display = "block";
    document.getElementById("avatarDisplayArea").style.display = "none";
    document.getElementById("createBtn").style.display = "block";
}

function onCancelBtnClicked() {
    clearInputForm();
}

//////////// Business Logic

function validateControls() {
    var form = document.forms["editForm"];
    var validated = true;

    // name textbox
    if (form.nameEdit.value === "") {
        document.getElementById("nameError").style.display = "block";
        document.getElementById("nameError").innerHTML = "Please enter a name!";
        validated = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }
    // age textbox
    if (form.ageEdit.value === "") {
        document.getElementById("ageError").style.display = "block";
        document.getElementById("ageError").innerHTML = "Please enter an age!";
        validated = false;
    } else if (isNaN(parseInt(form.ageEdit.value))) {
        document.getElementById("ageError").style.display = "block";
        document.getElementById("ageError").innerHTML = "Age must be a number.";
    } else if (parseInt(form.ageEdit.value) < 0 || parseInt(form.ageEdit.value) > 999) {
        document.getElementById("ageError").style.display = "block";
        document.getElementById("ageError").innerHTML = "Age must be a positive number.";
        validated = false;
    } else {
        document.getElementById("ageError").innerHTML = "";
    }
    // Gender radio buttons
    if (form.genderMaleRadio.checked == false && form.genderFemaleRadio.checked == false) {
        document.getElementById("genderError").style.display = "block";
        document.getElementById("genderError").innerHTML = "Please specify a genter!";
        validated = false;
    } else {
        document.getElementById("genderError").innerHTML = "";
    }
    // Skin Color Dropdown
    if (form.skinColor.selectedIndex = -1) {
        document.getElementById("skinColorError").style.display = "block";
        document.getElementById("skinColorError").innerHTML = "Please choose a skin color";
        validated = false;
    } else {
        document.getElementById("skinColorError").innerHTML = "";
    }
    // Sword Check Box. 
    if (form.sword.checked == false) {
        document.getElementById("swordError").style.display = "block";
        document.getElementById("swordError").innerHTML = "IT'S DANGEROUS TO GO ALONE! TAKE THIS!";
        validated = false;
    } else {
        document.getElementById("swordError").innerHTML = "";
    }

    return validated;
    
    // If else statement to see what avatar.
    if (form.genderMaleRadio.checked == true) {
        document.getElementById("avatar").src = "../img/sprites1.jpg";
    } else if (form.genderFemaleRadio.checked == true) {
        document.getElementById("avatar").src = "../img/sprites2.jpg";
    }
}

