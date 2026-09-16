// Puxamos o botão do HTML para dentro do JavaScript usando o ID dele
const botaoTema = document.getElementById('botao-tema');
const temaicon = document.getElementById('tema-icon');

// Adicionamos um "ouvinte de eventos" (EventListener) que espera um clique
botaoTema.addEventListener('click', function() {
    // O interruptor que liga e desliga a classe 'dark-mode' no corpo da página
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')) {
        // Se estiver escuro, mostra o Sol
        temaicon.classList.remove('ph-moon');
        temaicon.classList.add('ph-sun');

    } else {
        // Se estiver claro, mostra a Lua
        temaicon.classList.remove('ph-sun');
        temaicon.classList.add('ph-moon');
    }
});