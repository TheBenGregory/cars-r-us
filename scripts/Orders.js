import { getInteriors, getTechs, getPaints, getWheels, getCustomOrders  } from "./database.js";



const interiors = getInteriors()
const techs = getTechs()
const paints = getPaints()
const wheels = getWheels()

const buildOrderListItem = (order) => {


    const selectedInteriors = interiors.find(
        (interior) => {
            return interior.id === order.interiorId

        }
    )

    const selectedTechs = techs.find(
        (tech) => {
            return tech.id === order.techId

        }
    )

    const selectedPaints = paints.find(
        (paint) => {
            return paint.id === order.paintId

        }
    )
    const selectedWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId

        }
    )    

    const totalCost = selectedInteriors.price + selectedTechs.price + selectedPaints.price + selectedWheels.price

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