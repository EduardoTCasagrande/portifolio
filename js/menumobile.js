document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
});

// Adicione o seguinte código para fechar o menu ao clicar em um item
document.querySelectorAll('.menu a').forEach(function (item) {
    item.addEventListener('click', function () {
        document.querySelector('.menu').classList.remove('active');
    });
});
