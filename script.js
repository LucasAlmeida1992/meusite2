document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada. Interatividade ativa.");

    const btnOrcamento = document.getElementById("btnOrcamento");
    const maquina = document.querySelector(".maquina");

    if (btnOrcamento) {
        btnOrcamento.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("Botão Orçamento clicado!");

            btnOrcamento.classList.add("clicked");

            setTimeout(() => {
                btnOrcamento.classList.remove("clicked");
            }, 500);

            if (maquina) {
                console.log("Animação na máquina iniciada.");
                maquina.style.transform = `translateY(-50px)`;
            }

            setTimeout(() => {
                window.location.href = "https://wa.me/message/2KNB5DI35PDBH1";
            }, 600);
        });
    } else {
        console.error("Botão '#btnOrcamento' não encontrado no DOM.");
    }
});





