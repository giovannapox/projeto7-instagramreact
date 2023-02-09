import Story from "./Story"

const stories = [
    {username: "9gag", imagem: "assets/img/9gag.svg"},
    {username: "meowed", imagem: "assets/img/meowed.svg"},
    {username: "barked", imagem: "assets/img/barked.svg"},
    {username: "nathanwpylestrangeplanet", imagem: "assets/img/nathanwpylestrangeplanet.svg"},
    {username: "wawawicomics", imagem: "assets/img/wawawicomics.svg"},
    {username: "respondeai", imagem: "assets/img/respondeai.svg"},
    {username: "filomoderna", imagem: "assets/img/filomoderna.svg"},
    {username: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg"}
]

export default function Stories() {
    return (
        <div class="stories">
            {stories.map((s) => <Story username={s.username} imagem={s.imagem}/>)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}