// Ações dos ícones de navegação
document.querySelectorAll('.icons a').forEach((icon, index) => {
  icon.addEventListener('click', function() {
    switch (index) {
      case 0:
        window.location.href = 'https://github.com/NeusaNeves'; // Projeto
        break;
      case 1:
        window.location.href = 'https://www.linkedin.com/in/neusa-neves-81947b253/'; // Habilidades
        break;
    }
  });
});

  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

// Área das informaçoes sobre-mim

function abrirCaixa() {
    document.getElementById('caixa-info').style.display = 'block';
}

function fecharCaixa() {
    document.getElementById('caixa-info').style.display = 'none';
}

// Área dos projetos

$(document).ready(function () {
  $('#caixa').hover(
    function () {
      $('#img-projeto').hide();         // esconde a imagem
      $('#texto-projeto').fadeIn();     // mostra o texto suavemente
      $('#caixa').click(function() {
        window.open('https://github.com/NeusaNeves/Calculadora-Imc', '_blank');
      });
    },
    function () {
      $('#texto-projeto').hide();       // esconde o texto
      $('#img-projeto').fadeIn();       // mostra a imagem suavemente
    }
  );
   $('#caixa1').hover(
    function () {
      $('#img-projeto1').hide();         // esconde a imagem
      $('#texto-projeto1').fadeIn();     // mostra o texto suavemente
      $('#caixa1').click(function() {
        window.open('https://github.com/NeusaNeves/Kanban', '_blank');
      });
    },
    function () {
      $('#texto-projeto1').hide();       // esconde o texto
      $('#img-projeto1').fadeIn();       // mostra a imagem suavemente
    }
  );
  $('#caixa2').hover(
    function () {
      $('#img-projeto2').hide();         // esconde a imagem
      $('#texto-projeto2').fadeIn();     // mostra o texto suavemente
      $('#caixa2').click(function() {
        window.open('https://github.com/NeusaNeves/Login-github', '_blank');
      });
    },
    function () {
      $('#texto-projeto2').hide();       // esconde o texto
      $('#img-projeto2').fadeIn();       // mostra a imagem suavemente
    }
  );
});

  
  