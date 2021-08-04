import { getPaints, setPaint } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)
// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "color") 

//         {
//             window.alert(`Customer selected color ${event.target.value}`)
//         }
//     }
// )


export const Paint = () => {
    const paint = getPaints()
    let html = "<ul>"

    const listItemsArray = paint.map(paint => {
        return `<li><input type="radio" name="paint" value="${paint.id}"/> ${paint.color}
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"
    return html
}