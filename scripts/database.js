const database = {
    orderBuilder: {
        

    },
    wheels: [
        {
            id: 1,
            type: "Spoke",
            size: 18,
            color: "Black",
            price: 400,
        },
        {
            id: 2,
            type: "Spoke",
            size: 18,
            color: "Silver",
            price: 400,
        },
        {
            id: 3,
            type: "Radial",
            size: 17,
            color: "Silver",
            price: 1100,
        },
        {
            id: 4,
            type: "Radial",
            size: 17,
            color: "Black",
            price: 1100
        }

    ],
    techs: [{
        id: 1,
        type: "Basic Package",
        price: 500,
    },
    {
        id: 2,
        type: "Navigation Package",
        price: 1200,
    },
    {
        id: 3,
        type: "Visibility Package",
        price: 1400,
    },
    {
        id: 4,
        type: "Ultra Package",
        price: 2200,
    }

    ],
    interiors: [{
        id: 1,
        color: "Beige",
        type: "Fabric",
        price: 250

    },
    {
        id: 2,
        color: "Charcoal",
        type: "Fabric",
        price: 250
    },
    {
        id: 3,
        color: "White",
        type: "Leather",
        price: 900
    },
    {
        id: 4,
        color: "Black",
        type: "Leather",
        price: 900,
    },
    ],
    paints: [
        {
            id: 1,
            color: "Silver",
            price: 400,
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 400,
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 400,
        },
        {
            id: 4,
            color: "Spring Green",
            price: 400,
        },

    ],
    customOrders: [{
        id: 1,
        wheelId: 1,
        techId: 1,
        interiorId: 1,
        paintId: 1,
        
    }],
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}
export const getPaints = () => {
    return database.paints.map(paint => ({ ...paint }))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}
export const getTechs = () => {
    return database.techs.map(tech => ({ ...tech }))
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}
export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const addCustomOrder = () => {
    const newOrder = { ...database.orderBuilder }
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getCustomOrders = () => {
    
    return database.customOrders.map(order => ({ ...order }))
}