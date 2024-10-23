function saklar() {
    let toggle1 = document.getElementById("default-toggle1")
    let toggle2 = document.getElementById("default-toggle2")
    let toggle3 = document.getElementById("default-toggle3")
    let toggle4 = document.getElementById("default-toggle4")
    let toggle5 = document.getElementById("default-toggle5")
    let toggle6 = document.getElementById("default-toggle6")
    let toggle7 = document.getElementById("default-toggle7")
    let toggle8 = document.getElementById("default-toggle8")
    let toggle9 = document.getElementById("default-toggle9")
    let toggle10 = document.getElementById("default-toggle10")

    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")
    let lampu4 = document.getElementById("lampu4")
    let lampu5 = document.getElementById("lampu5")
    let lampu6 = document.getElementById("lampu6")
    let lampu7 = document.getElementById("lampu7")
    let lampu8 = document.getElementById("lampu8")
    let lampu9 = document.getElementById("lampu9")
    let lampu10 = document.getElementById("lampu10")

    if(toggle1.checked == true) {
        lampu1.src = "assets/images/on.gif"
    } else if(toggle1.checked == false){
        lampu1.src = "assets/images/off.gif"
    }

    if(toggle2.checked == true) {
        lampu2.src = "assets/images/on.gif"
    } else if(toggle2.checked == false){
        lampu2.src = "assets/images/off.gif"
    }

    if(toggle3.checked == true) {
        lampu3.src = "assets/images/on.gif"
    } else if(toggle3.checked == false){
        lampu3.src = "assets/images/off.gif"
    }
    
    if(toggle4.checked == true) {
        lampu4.src = "assets/images/on.gif"
    } else if(toggle4.checked == false){
        lampu4.src = "assets/images/off.gif"
    }

    if(toggle5.checked == true) {
        lampu5.src = "assets/images/on.gif"
    } else if(toggle5.checked == false){
        lampu5.src = "assets/images/off.gif"
    }

    if(toggle6.checked == true) {
        lampu6.src = "assets/images/on.gif"
    } else if(toggle6.checked == false){
        lampu6  .src = "assets/images/off.gif"
    }

    if(toggle7.checked == true) {
        lampu7.src = "assets/images/on.gif"
    } else if(toggle7.checked == false){
        lampu7.src = "assets/images/off.gif"
    }

    if(toggle8.checked == true) {
        lampu8.src = "assets/images/on.gif"
    } else if(toggle8.checked == false){
        lampu8.src = "assets/images/off.gif"
    }

    if(toggle9.checked == true) {
        lampu9.src = "assets/images/on.gif"
    } else if(toggle9.checked == false){
        lampu9.src = "assets/images/off.gif"
    }

    if(toggle10.checked == true) {
        lampu10.src = "assets/images/on.gif"
    } else if(toggle10.checked == false){
        lampu10.src = "assets/images/off.gif"
    }
}

function saklarGroupKeluarga(){
    let toggle1 = document.getElementById("default-toggle1")
    let toggle2 = document.getElementById("default-toggle2")
    let toggle3 = document.getElementById("default-toggle3")
    let toggle_kel = document.getElementById("default-toggle-kel")

    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")

    if(toggle_kel.checked == true) {
        lampu1.src = "assets/images/on.gif"
        lampu2.src = "assets/images/on.gif"
        lampu3.src = "assets/images/on.gif"

        toggle1.checked = true
        toggle2.checked = true
        toggle3.checked = true
    } else if(toggle_kel.checked == false) {
        lampu1.src = "assets/images/off.gif"
        lampu2.src = "assets/images/off.gif"
        lampu3.src = "assets/images/off.gif"

        toggle1.checked = false
        toggle2.checked = false
        toggle3.checked = false
    }
}

function saklarGroupTidur(){
    let toggle5 = document.getElementById("default-toggle5")
    let toggle6 = document.getElementById("default-toggle6")
    let toggle_tid = document.getElementById("default-toggle-tid")

    let lampu5 = document.getElementById("lampu5")
    let lampu6 = document.getElementById("lampu6")

    if(toggle_tid.checked == true) {
        lampu5.src = "assets/images/on.gif"
        lampu6.src = "assets/images/on.gif"

        toggle5.checked = true
        toggle6.checked = true
    } else if(toggle_tid.checked == false) {
        lampu5.src = "assets/images/off.gif"
        lampu6.src = "assets/images/off.gif"

        toggle5.checked = false
        toggle6.checked = false
    }
}

function saklarGroupTamu(){
    let toggle7 = document.getElementById("default-toggle7")
    let toggle8 = document.getElementById("default-toggle8")
    let toggle9 = document.getElementById("default-toggle9")
    let toggle10 = document.getElementById("default-toggle10")
    let toggle_tam = document.getElementById("default-toggle-tam")

    let lampu7 = document.getElementById("lampu7")
    let lampu8 = document.getElementById("lampu8")
    let lampu9 = document.getElementById("lampu9")
    let lampu10 = document.getElementById("lampu10")

    if(toggle_tam.checked == true) {
        lampu7.src = "assets/images/on.gif"
        lampu8.src = "assets/images/on.gif"
        lampu9.src = "assets/images/on.gif"
        lampu10.src = "assets/images/on.gif"

        toggle7.checked = true
        toggle8.checked = true
        toggle9.checked = true
        toggle10.checked = true
    } else if(toggle_tam.checked == false) {
        lampu7.src = "assets/images/off.gif"
        lampu8.src = "assets/images/off.gif"
        lampu9.src = "assets/images/off.gif"
        lampu10.src = "assets/images/off.gif"

        toggle7.checked = false
        toggle8.checked = false
        toggle9.checked = false
        toggle10.checked = false
    }
}