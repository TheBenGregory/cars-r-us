import { getTechnologies, setTechnology } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)
// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "technology") 
                
//         {
//             window.alert(`Customer selected tech package ${event.target.value}`)
//         }
//     }
// )
export const tech = getTechnologies()

export const Technologies = () => {
    let html = "<ul>"

    const listItemsArray = tech.map(tech => {
        return `<li><input type="radio" name="technology" value="${tech.id}"/> ${tech.type}
        </li>`
    })
    
    html += listItemsArray.join("")
    html += "</ul>"
    return html 
}