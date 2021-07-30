import { getPaintColors, setPaintColor } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
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
export const color = getPaintColors()

export const PaintColor = () => {
    let html = "<ul>"

    const listItemsArray = color.map(color => {
        return `<li><input type="radio" name="color" value="${color.id}"/> ${color.color}
        </li>`
    })
    
    html += listItemsArray.join("")
    html += "</ul>"
    return html 
}