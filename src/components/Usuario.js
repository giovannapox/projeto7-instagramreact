import { useState } from "react";

export default function Usuario() {
    const [nomeDoUsuario, setNomeDoUsuario] = useState("catanacomics")
    const [img, setImg] = useState("assets/img/catanacomics.svg");

    function trocarFoto() {
        let novaImg = prompt("Insira o link da imagem");
        if(novaImg === null || novaImg === ""){
            setImg(img)
        } else {
        setNomeDoUsuario(novaImg);
        }
    }

    function trocarNome() {
        let novoNome = prompt("Insira seu novo nome de Usuário");
        if(novoNome === null || novoNome === ""){
            setNomeDoUsuario(nomeDoUsuario)
        } else {
        setNomeDoUsuario(novoNome);
        }
    }

    return (
        <div class="usuario">
            <img onClick={trocarFoto} src={img} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{nomeDoUsuario}</strong>
                    <ion-icon onClick={trocarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}
// (condição) ? true : false