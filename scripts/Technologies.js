import { getTechs, setTech } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "tech") {
            
            setTech(parseInt(event.target.value))
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

export const Techs = () => {
    const tech = getTechs()
    let html = "<ul>"

    const listItemsArray = tech.map(tech => {
        return `<li><input type="radio" name="tech" value="${tech.id}"/> ${tech.type}
        </li>`
    })
    
    html += listItemsArray.join("")
    html += "</ul>"
    return html 
}