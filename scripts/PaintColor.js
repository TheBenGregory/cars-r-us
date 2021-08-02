import { getPaintColors, setPaintColor } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paintColor") {
            setPaintColor(parseInt(event.target.value))
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
const paintColors = getPaintColors()

export const PaintColor = () => {
    let html = "<ul>"

    const listItemsArray = paintColors.map(paintColor => {
        return `<li><input type="radio" name="paintColor" value="${paintColor.id}"/> ${paintColor.color}
        </li>`
    })
    
    html += listItemsArray.join("")
    html += "</ul>"
    return html 
}