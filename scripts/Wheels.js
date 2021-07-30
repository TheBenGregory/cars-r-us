import { getWheels, setWheel } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const wheel = getWheels()

export const Wheels = () => {
    let html = "<ul>"

    const listItemsArray = wheel.map(wheel => {
        return `<li><input type="radio" name="wheel" value="${wheel.id}"/> ${wheel.color}
        </li>`
    })
    
    html += listItemsArray.join("")
    html += "</ul>"
    return html 
}