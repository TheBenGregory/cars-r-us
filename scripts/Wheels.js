import { getWheels, setWheel } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)
// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "wheel") 
                
//         {
//             window.alert(`Customer selected wheel ${event.target.value}`)
//         }
//     }
// )
const wheel = getWheels()

export const Wheel = () => {
    let html = "<ul>"

    const listItemsArray = wheel.map(wheel => {
        return `<li><input type="radio" name="wheel" value="${wheel.id}"/> ${wheel.color} ${wheel.type}
        </li>`
    })
    
    html += listItemsArray.join("")
    html += "</ul>"
    return html 
}