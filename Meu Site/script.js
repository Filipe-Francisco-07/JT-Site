
function rolarTela(element) {
    const map = {
        "img_eldenring": "eldenring",
        "img_darksouls": "darksouls",
        "img_cs2": "cs2",
        "img_reddead": "reddead",
        "img_dyinglight": "dyinglight",
        "img_dayz": "dayz",
        "sobre1": "sobre",
        "sobre2": "sobre"
    };

    const targetId = map[element.id];

    if(targetId == "sobre"){
      document.getElementById('sobre').scrollIntoView({begavior: "smooth"});
    }
    
    if (targetId) {
        const divPortugues = document.getElementById(targetId).closest('.jogos');
        const divIngles = document.getElementById(targetId + '2').closest('.jogos');

        if (divPortugues && divPortugues.style.display !== "none") {
            divPortugues.scrollIntoView({ behavior: "smooth" });
        } 
        else if (divIngles && divIngles.style.display !== "none") {
            divIngles.scrollIntoView({ behavior: "smooth" });
        }
    }
}

function jogoAleatorio(){
    const games = [
        "img_eldenring",
        "img_darksouls",
        "img_cs2",
        "img_reddead",
        "img_dyinglight",
        "img_dayz"
    ];
    let num = Math.floor(Math.random() * 6);

    return rolarTela(document.getElementById(games[num]));

}

function modoEscuro() {
    const h1 = document.querySelectorAll(".h1");
    const headers = document.querySelectorAll(".header");
    const body = document.getElementById("body");
    const botao = document.getElementById("darkmode");
    const botao2 = document.getElementById("darkmode2");
    if (botao.style.background.includes("rgb(63, 205, 117)")) { 
        botao.style.background = "linear-gradient(135deg, rgb(222, 85, 85), rgb(235, 104, 52))";
        botao2.style.background = "linear-gradient(135deg, rgb(222, 85, 85), rgb(235, 104, 52))";
        h1.forEach(h => {
            h.style.color = "black";
        });
        body.style.background = "#FFFACD";

    } else {
        botao.style.background = "linear-gradient(135deg, #3fcd75, #39b902)";
        botao2.style.background = "linear-gradient(135deg, #3fcd75, #39b902)";
        body.style.background = "";
        h1.forEach(h => {
            h.style.color = "";
        });

    }  
}
function traduzirTexto() {
    var jogosPortugues = document.querySelectorAll('[id$="_por"]');
    var jogosIngles = document.querySelectorAll('[id$="_eng"]');
  
    for (var i = 0; i < jogosPortugues.length; i++) {
      if (jogosPortugues[i].style.display !== "none") {
        jogosPortugues[i].style.display = "none";  
        jogosIngles[i].style.display = "block";   
      } else {
        jogosPortugues[i].style.display = "block";  
        jogosIngles[i].style.display = "none";    
      }
    }
  }

function aplicarEfeito(event) {
    if (event.type === "mouseenter") {
      event.currentTarget.style.border = "3px rgb(34, 219, 62) solid";
      event.currentTarget.style.background = "#5e5e5e";
    } else if (event.type === "mouseleave") {
        event.currentTarget.style.background = "#222";
      event.currentTarget.style.border = "";
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const divs = document.querySelectorAll(".jogo");
  
    divs.forEach((div) => {
      div.addEventListener("mouseenter", aplicarEfeito);
      div.addEventListener("mouseleave", aplicarEfeito);
    });
  });
  