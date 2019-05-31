let current = ""
setInterval(() => {

    const honyaku = document.querySelector("#honyaku");
    if (!honyaku) {
        const player = document.querySelector(".rc-VideoMiniPlayer");
        if (!player) return;
        const div = document.createElement("div");
        div.id = "honyaku";
        player.appendChild(div);
        console.log("added honyaku")
        return;
    }
    const active = document.querySelector(".rc-Phrase.active");
    if (current == active.innerText) return;
    honyaku.innerText = active.innerText;
    current = active.innerText;

}, 100);
// rc-Phrase active -> 表示したい字幕
// rc-VideoMiniPlayer -> ビデオの要素
