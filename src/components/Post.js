import { useState } from "react"

export default function Post (props) {
    const [salvarPost, setSalvarPost] = useState("bookmark-outline")
    const [curtirPost, setCurtirPost] = useState("heart-outline")
    const [cor, setCor] = useState("")
    const [contador, setContador] = useState(101523)

    function curtir (){
        if(curtirPost === "heart-outline" && cor === ""){
            setCurtirPost("heart")
            setCor("vermelho")
            setContador( contador + 1)
        } else {
            setCurtirPost("heart-outline")
            setCor("")
            setContador( contador - 1)
        }
    }

    function curtirImg (){
        if(curtirPost === "heart-outline" && cor === ""){
            setCurtirPost("heart")
            setCor("vermelho")
            setContador( contador + 1)
        } 
    }
    
    
    function salvar (){
        if(salvarPost === "bookmark-outline"){
            setSalvarPost("bookmark")
        } else {
            setSalvarPost("bookmark-outline")
        }
    }

    return (
        <div data-test="post" class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.icone} alt={props.username}/>
                        {props.username}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img data-test="post-image" onClick={curtirImg} src={props.imgPost} alt={props.descricao} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon data-test="like-post" onClick={curtir} class={cor} name={curtirPost}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon data-test="save-post" onClick={salvar} name={salvarPost}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.iconCurtido} alt={props.curtidoPor} />
                        <div data-test="likes-number" class="texto">
                            Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras {contador} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
    )
}