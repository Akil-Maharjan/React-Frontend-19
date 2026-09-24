import { api } from "./api";


export async function getProducts(){
   const res = await api.get("/products")
   return res.data
}

export async function addProduct(product){
   const res = await api.post("/products",product)
   return res.data
}

export async function updateProduct(product){
   const res = await api.put(`/products/${product.id}`,product)
   return res.data
}

export async function deleteProduct(id){
   const res = await api.delete(`/products/${id}`)
   return res.data
}