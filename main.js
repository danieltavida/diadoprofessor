document.addEventListener("DOMContentLoaded", function () {
    var mensagem = document.getElementById("mensagem");
    var mostrarMensagemBtn = document.getElementById("mostrarMensagem");

    mostrarMensagemBtn.addEventListener("click", function () {
        mensagem.innerHTML = "Dia do Professor é o momento para valorizar e reconhecer a nobre missão desses mestres que tanto se dedicam à arte de ensinar. " +
        "Vamos honrá-los não apenas com palavras, mas com ações.! " +
        "A cada educador, nosso respeito e gratidão. " + 
        "Que este dia seja repleto de reconhecimento, carinho e admiração por aqueles que iluminam nossas vidas com sabedoria e amor. " +
        
        "Feliz Dia dos Professores! " ;
        
    });
});

