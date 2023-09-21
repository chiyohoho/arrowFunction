// FUNCTION CALL ELEMENT
const callElement = (id) => {
    return document.querySelector(id)
}
const button = callElement("#btn")
const circleBG = callElement("#circle_bg")
const showBtnList = callElement("#btn_list")
let btnList = [
    {
        id: 1,
        bg: "#b888f8"
    },
    {
        id: 2,
        bg: "#7ff71f"
    },
    {
        id: 3,
        bg: "#909078"
    },
    {
        id: 4,
        bg: "#2840f8"
    },
    {
        id: 5,
        bg: "#f89800"
    },
    {
        id: 6,
        bg: "#c820f8"
    },
    {
        id: 7,
        bg: "#094709"
    },
    {
        id: 8,
        bg: "#f8f800"
    },
    {
        id: 9,
        bg: "#f87878"
    },
    {
        id: 10,
        bg: "#f84040"
    },
]
// -------------------------------------------
const showButton = () => {
    let str = ""
    btnList.map(item => {
        str += `
        <li id="btn" class="button" style="background: ${item.bg};" onclick="changeBackground('${item.bg}')"></li>
        `
    })
    showBtnList.innerHTML = str
}
showButton()
// --------FUNCTION CHANGE BG BUTTON
const changeBackground = (color) => {
    return circleBG.style.background = color
}
