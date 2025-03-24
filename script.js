document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada. Interatividade ativa."); // Confirma que o JS foi carregado

    const btnOrcamento = document.getElementById("btnOrcamento");
    const maquinaverde = document.querySelector(".maquinaverde");
    const maquina = document.querySelector(".maquina");

    if (btnOrcamento) {
        btnOrcamento.addEventListener("click", (e) => {
            e.preventDefault(); // Evita redirecionamento imediato
            console.log("Botão Orçamento clicado!"); // Confirma o clique

            const isDesktop = window.innerWidth >= 768;
            const distance = isDesktop ? -200 : -50; // Distância ajustada

            if (maquinaverde && maquina) {
                console.log("Animação sendo aplicada.");
                maquinaverde.style.transform = `translateY(${distance}px)`;
                maquina.style.transform = `translateY(${distance}px)`;
            } else {
                console.error("Elementos '.maquinaverde' ou '.maquina' não encontrados.");
            }

            setTimeout(() => {
                window.location.href = "https://wa.me/message/2KNB5DI35PDBH1"; // Redireciona para o WhatsApp
            }, 500); // Aguarde 0.5 segundo para o redirecionamento
        });
    } else {
        console.error("Botão '#btnOrcamento' não encontrado no DOM.");
    }
});




