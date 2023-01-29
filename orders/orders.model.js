const orders = [ {
    date:'2023-10-20',
    subtotal:46.89,
    items:[{
        product:{
            id:'blackshoe',
            description:' New Black Shoe',
            price:51.90
        },
        quantity:2,
    }]

}]

function getAllOrders(){
    return orders;
}

module.exports={
    getAllOrders
}