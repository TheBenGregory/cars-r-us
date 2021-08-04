import { getInteriors, setInterior } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)


// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "interior") 

//         {
//             window.alert(`Customer selected interior ${event.target.value}`)
//         }
//     }
// )


export const Interiors = () => {
    const interior = getInteriors()


    let html = "<ul>"

    const listItemsArray = interior.map(interior => {
        return `<li><input type="radio" name="interior" value="${interior.id}"/> ${interior.color} ${interior.type}
    
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"
    return html
}