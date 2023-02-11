import Sugestao from "./Sugestao"

const sugestoes = [
    {nome:"bad.vibes.memes" , imagem:"assets/img/bad.vibes.memes.svg"},
    {nome:"chibirdart" , imagem:"assets/img/chibirdart.svg"},
    {nome:"razoesparaacreditar" , imagem:"assets/img/razoesparaacreditar.svg"},
    {nome:"adorable_animals" , imagem:"assets/img/adorable_animals.svg"},
    {nome:"smallcutecats" , imagem:"assets/img/smallcutecats.svg"}
]


export default function Sugestoes() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map((s) => <Sugestao key={s.nome} nome={s.nome} imagem={s.imagem} />)}
        </div>
    )
}