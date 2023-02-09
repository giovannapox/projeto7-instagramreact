import Post from "./Post"

const post = [
    {username: "meowed", icone: "assets/img/meowed.svg", imgPost: "assets/img/gato-telefone.svg", descricao: "gato-telefone", iconCurtido: "assets/img/respondeai.svg", curtidoPor: "respondeai"},
    {username: "barked", icone: "assets/img/barked.svg", imgPost: "assets/img/dog.svg", descricao: "cachorrinho", iconCurtido: "assets/img/adorable_animals.svg", curtidoPor: "adorable_animals"},
    {username: "valorantoficial", icone: "assets/img/valorant.png", imgPost: "assets/img/killjoy.jpg", descricao: "killjoyvalorant", iconCurtido: "assets/img/barked.svg", curtidoPor: "barked"},
]

export default function Posts() {
    return (
        <div class="posts">
            {post.map((p) => <Post username={p.username} icone={p.icone} imgPost={p.imgPost} descricao={p.descricao} iconCurtido={p.iconCurtido} curtidoPor={p.curtidoPor} />)}
        </div>
    )
}