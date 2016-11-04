function toggleNavPanel(){
                  var panel = document.getElementById("Menu_MenuPrincipal"),
                      navarrow = document.getElementById("navarrow"),
                      maxH = "250px";
                  if (panel.style.height == maxH) {
                    close_all();
                      panel.style.height = "0px";
                      navarrow.innerHTML = "&#9662;";
                  } else {
                      panel.style.height = maxH;
                      navarrow.innerHTML = "&#9652;";
                  }
            }
function menu_open() {
        var panel = document.getElementById("menu_open"),
        maxH1 = "134.5px";
    if (panel.style.height == maxH1) {
        panel.style.height = "0px";
    } else if (panel.style.height !== maxH1) {
        close_all();
        panel.style.height = maxH1;
    }
}

function menu_repre() {

    var panel = document.getElementById("menu_repre"),
        maxH2 = "153px";
    if (panel.style.height == maxH2) {
        panel.style.height = "0px";


    } else if (panel.style.height !== maxH2) {
        close_all();
        panel.style.height = maxH2;


    }
}

function menu_action() {

    var panel = document.getElementById("menu_action"),
        maxH3 = "190px";
    if (panel.style.height == maxH3) {
        panel.style.height = "0px";

    } else if (panel.style.height !== maxH3) {
        close_all();
        panel.style.height = maxH3;

    }
}

function menu_select() {
    var panel = document.getElementById("menu_select"),
        maxH4 = "116px";
    if (panel.style.height == maxH4) {

        panel.style.height = "0px";

    } else if (panel.style.height !== maxH4) {
      close_all();
        panel.style.height = maxH4;

    }
}

function menu_view() {
    var panel = document.getElementById("menu_view"),
        maxH5 = "182px";
    if (panel.style.height == maxH5) {
        panel.style.height = "0px";

    } else if (panel.style.height !== maxH5) {
        close_all();
        panel.style.height = maxH5;

    }
}

function menu_medidas(x) {
    var panel = document.getElementById(x),
        maxH5 = "30%";
    if (panel.style.height == maxH5) {
        panel.style.height = "0px";

    } else if (panel.style.height !== maxH5) {
        close_all();
        panel.style.height = maxH5;

    }
}

function menu_open_close() {
  document.getElementById("menu_open").style.height = "0px";
  document.getElementById("menu_repre").style.height = "0px";
  document.getElementById("menu_action").style.height = "0px";
  document.getElementById("menu_select").style.height = "0px";
  document.getElementById("menu_view").style.height = "0px";
  document.getElementById("menu_medidas").style.height = "0px";
}

function close_all() {
    document.getElementById("menu_open").style.height = "0px";
    document.getElementById("menu_repre").style.height = "0px";
    document.getElementById("menu_action").style.height = "0px";
    document.getElementById("menu_select").style.height = "0px";
    document.getElementById("menu_view").style.height = "0px";
    document.getElementById("menu_medidas").style.height = "0px";

}
