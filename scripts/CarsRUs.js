import { Interiors } from "./Interiors.js"
import { PaintColor } from "./PaintColor.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("orderButton")) {
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
            <section class="choices__tech options">
                <h2>Technology</h2>
                ${Technologies()}
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${Interiors()}
            </section>
            <section class="choices__color options">
            <h2>Color</h2>
            ${PaintColor()}
        </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
        <section>
            <h2>Custom Jewelry Orders</h2>
           ${addCustomOrders()}
           </section>
        </article>
    `
}
