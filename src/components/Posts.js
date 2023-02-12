import Post from "./Post"

const post = [
    {username: "meowed", icone: "assets/img/meowed.svg", imgPost: "assets/img/gato-telefone.svg", descricao: "gato-telefone", iconCurtido: "assets/img/respondeai.svg", curtidoPor: "respondeai", curtidas: "190"},
    {username: "barked", icone: "assets/img/barked.svg", imgPost: "assets/img/dog.svg", descricao: "cachorrinho", iconCurtido: "assets/img/adorable_animals.svg", curtidoPor: "adorable_animals", curtidas: "612"},
    {username: "valorantoficial", icone: "assets/img/valorant.png", imgPost: "assets/img/killjoy.jpg", descricao: "killjoyvalorant", iconCurtido: "assets/img/barked.svg", curtidoPor: "barked", curtidas: "866"},
]

export default function Posts() {
    return (
        <div className="posts">
            {post.map((p) => <Post key={p.username} username={p.username} icone={p.icone} imgPost={p.imgPost} descricao={p.descricao} iconCurtido={p.iconCurtido} curtidoPor={p.curtidoPor} curtidas={p.curtidas} />)}
        </div>
    )
}