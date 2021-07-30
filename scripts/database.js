const database = {
    orderBuilder: {

    },
    wheels: [
        {
            id: 1,
            type: "Spoke",
            size: 18,
            color: "Black"
        },
        {
            id: 2,
            type: "Spoke",
            size: 18,
            color: "Silver"
        },
        {
            id: 3,
            type: "Radial",
            size: 17,
            color: "Silver"
        },
        {
            id: 4,
            type: "Radial",
            size: 17,
            color: "Black"
        }

    ],
    technologies: [{
        id: 1,
        type: "Basic Package"
    },
    {
        id: 2,
        type: "Navigation Package"
    },
    {
        id: 3,
        type: "Visibility Package"
    },
    {
        id: 4,
        type: "Ultra Package"
    }

    ],
    interiors: [{
        id: 1,
        color: "Beige",
        type: "Fabric"
    },
    {
        id: 2,
        color: "Charcoal",
        type: "Fabric"
    },
    {
        id: 3,
        color: "White",
        type: "Leather"
    },
    {
        id: 4,
        color: "Black",
        type: "Leather"
    },
    ],
    paintColors: [
        {
            id: 1,
            color: "Silver",
        },
        {
            id: 2,
            color: "Midnight Blue",
        },
        {
            id: 3,
            color: "Firebrick Red",
        },
        {
            id: 4,
            color: "Spring Green",
        },

    ],
    customOrders: [{
        id: 1,
        wheelsId: 1,
        techId: 1,
        interiorId: 1,
        paintId: 1,
    }]
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}
export const getPaintColors = () => {
    return database.paintColors.map(color => ({ ...color }))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({ ...technology }))
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
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

export const getCustomOrders = (id) => {
    database.orderBuilder.customOrdersid = id
}