// FUNCTION CALL ELEMENT
const callElement = (id) => {
    return document.querySelector(id)
}
const button = callElement("#btn")
const circleBG = callElement("#circle_bg")
const showColorList = callElement("#btn_list")
const btnAddColor = callElement("#btn_add_color")
const addColorInput = callElement("#input_color")
const searchColor = callElement("#input_search")
const searchSubText = callElement("#search_subtext")
const showContent = callElement("#show_content")
const showContentNumber = callElement("#show_number")
const showContentCode = callElement("#show_color")
let colorList = [
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
// --------FUNCTION SHOW COLOR LIST
const showColor = () => {
    let str = ""
    colorList.map(item => {
        str += `
        <li id="btn" class="button">
                    <div class="btn_color" style="background: ${item.bg};" onclick="changeBackground('${item.bg}')"></div>
                    <span class="material-symbols-outlined btn_remove" onclick="removeColor('${item.bg}')">delete</span>
                </li>
        `
    })
    showColorList.innerHTML = str
}
showColor()
// --------FUNCTION CHANGE BG BUTTON
const changeBackground = (color) => {
    return circleBG.style.background = color
}
// --------FUNCTION ADD COLOR BUTTON
const addMoreColor = () => {
    const addColor = addColorInput.value
    if (addColor) {
        if (addColor.startsWith("#")) {
            let checkColor = false
            colorList.map((item, index) => {
                if (addColor === item.bg) {
                    checkColor = true
                }
            })

            if (checkColor) {
                alert("This color code already exists")
            } else {
                let newColor = {
                    id: colorList.length + 1,
                    bg: addColor
                }
                colorList.push(newColor)
                showColor()
            }
        } else {
            alert("The color code must have # in front")
        }

    } else {
        addColorInput.placeholder = "Please enter your color code"
        addColorInput.style.border = "2px solid red"
        addColorInput.style.color = "red"
        addColorInput.style.width = "200px"
    }
    console.log("check color list: ", colorList)
}
// --------FUNCTION REMOVE COLOR BUTTON
const removeColor = (color) => {
    let needRemove = colorList.findIndex((item, index) => {
        return item.bg === color
    })

    if (needRemove !== -1) {
        colorList.splice(needRemove, 1)
    }
    showColor()
}
// --------FUNCTION CHANGE SEARCH PLACEHOLDER
const searchPlaceholder = (content) => {
    searchColor.setAttribute("placeholder", content)
}
// --------FUNCTION SEARCH COLOR
const showSearchColor = () => {
    let numberSearch = searchColor.value;
    if (numberSearch) {
        let findNumber = colorList.findIndex((item) => {
            let colorID = item.id;
            let find = colorID == numberSearch;

            return find;
        });

        if (findNumber !== -1 && findNumber <= colorList.length) {
            showContentNumber.textContent = `Number ${numberSearch} `;
            showContentNumber.style.color = "black";
            showContentCode.textContent = `Color code : ${colorList[findNumber].bg}`;
            showContentCode.style.color = colorList[findNumber].bg
            showContentCode.style.visibility = "visible"

        } else {
            showContentNumber.textContent = `We only have ${colorList.length} in the Color List, please try again with number from 1 to ${colorList.length}`;
            showContentNumber.style.color = "red";
            showContentCode.style.visibility = "hidden"
        }
        showContent.style.visibility = "visible";
    } else {
        showContent.style.visibility = "visible";
        showContentNumber.textContent = "Please enter any number";
        showContentNumber.style.color = "black"
    }
}



