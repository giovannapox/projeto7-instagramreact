import { useState } from "react";

export default function Usuario() {
    const [nomeDoUsuario, setNomeDoUsuario] = useState("catanacomics")
    const [img, setImg] = useState("assets/img/catanacomics.svg");

    function trocarFoto() {
        let novaImg = prompt("Insira o link da imagem");
        if(novaImg === null || novaImg === ""){
            setImg(img)
        } else {
        setImg(novaImg);
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
        <div className="usuario">
            <img data-test="profile-image" onClick={trocarFoto} src={img} alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong data-test="name">{nomeDoUsuario}</strong>
                    <ion-icon data-test="edit-name" onClick={trocarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}