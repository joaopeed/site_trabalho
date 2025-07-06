// Função responsável por mudar o conteúdo das abas
function mudaTab(e, tabName) {
    var i, tabcontent, tablinks;

    // Oculta todos os conteúdos
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe "active" dos botões
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra a aba clicada e adiciona classe "active"
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
}

// Ativa a aba "Início" automaticamente ao carregar a página
window.onload = function () {
    const inicioBtn = document.querySelector(".tab button[onclick*='inicio']");
    if (inicioBtn) {
        inicioBtn.click();
    }
};
