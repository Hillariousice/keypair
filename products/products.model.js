const products=[
    {
        id:'bluebag',
        description:'Blue Bag',
        price:25.99,
        reviews:[]
    },{
        id:'blackshoe',
        description:'Blue Shoe',
        price:23.90,
        reviews:[]
    }   
]

function getAllProducts(){
    return products
}
function getProductsByPrice(min, max){
   return products.filter((product)=>{
        return product.price> min && product.price <= max 
    })
}
function getProductsById(id){
    return products.find((product)=>{
        return product.id === id
    })
}

function addNewProduct(id,description,price){
    const newProduct={
        id,description,price, reviews:[]
    }
   products.push(newProduct)
   return newProduct
}
function addNewProductReview(id,rating,comment){
   const matchProduct =getProductsById(id)
   if(matchProduct){
    const newProductReview = {
        rating,
        comment
    }
    matchProduct.reviews.push(newProductReview)
   }
   return newProductReview
}


module.exports={
    getAllProducts,
    getProductsByPrice,
    getProductsById,
    addNewProduct,
    addNewProductReview
}