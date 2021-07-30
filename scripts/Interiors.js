import { getInteriors, setInterior } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const interior = getInteriors()

export const Interiors = () => {
    let html = "<ul>"

    const listItemsArray = interior.map(interior => {
        return `<li><input type="radio" name="interior" value="${interior.id}"/> ${interior.color}
        </li>`
    })
    
    html += listItemsArray.join("")
    html += "</ul>"
    return html 
}