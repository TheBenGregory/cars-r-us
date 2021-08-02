import { getInteriors, getTechnologies, getPaintColors, getWheels, getCustomOrders  } from "./database.js";



const interiors = getInteriors()
const technologies = getTechnologies()
const colors = getPaintColors()
const wheels = getWheels()

const buildOrderListItem = (order) => {


    const selectedInteriors = interiors.find(
        (interior) => {
            return interior.id === order.interiorId

        }
    )

    const selectedTechnologies = technologies.find(
        (tech) => {
            return tech.id === order.techId

        }
    )

    const selectedPaintColors = colors.find(
        (color) => {
            return color.id === order.colorId

        }
    )
    const selectedWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId

        }
    )

    const totalCost = selectedInteriors.price + selectedTechnologies.price + selectedPaintColors.price + selectedWheels

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
                Order #${order.id} cost ${costString}
                </li>`

}

// return `<li>
//     Order #${order.id} was placed on ${order.timestamp}
// </li>`

export const Orders = () => {

    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}