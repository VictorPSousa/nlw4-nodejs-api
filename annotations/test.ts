

// UUID = Universally Unique Identifier (ID  universal em forma de string)
/*
function enviarEmail(para, id, assunto, texto){
    // lib de envio de email

    console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario{
    send(){
        enviarEmail("email@email.com", 9988, "assunto", "texto");
    }
}
*/

interface DadosDeEnvioDeEmail{
    para: string;
    id: string;
    assunto: string;
    texto: string
}

function enviarEmail({para, id, assunto, texto}: DadosDeEnvioDeEmail){
    console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario{
    send(){
        enviarEmail({
            para: "email@email.com",
            id: "9988",
            assunto: "Olá!",
            texto: "Tudo bem?"});
    }
}