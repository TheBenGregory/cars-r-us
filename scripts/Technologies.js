import { getTechs, setTech } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "tech") {
            console.log(event.target.value)
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
const tech = getTechs()

export const Techs = () => {
    let html = "<ul>"

    const listItemsArray = tech.map(tech => {
        return `<li><input type="radio" name="tech" value="${tech.id}"/> ${tech.type}
        </li>`
    })
    
    html += listItemsArray.join("")
    html += "</ul>"
    return html 
}