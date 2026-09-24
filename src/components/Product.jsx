import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProduct, deleteProduct, getProducts, updateProduct } from "../api/Product";
import { useState } from "react";
import toast from "react-hot-toast";
import AddEditModal from "./Modals/AddEditModal";

const Product = () => {
  const queryClient = useQueryClient();
    const [mode, setMode] = useState("add");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  console.log(products);

  const addMutation = useMutation({
    mutationFn: (product) => addProduct(product),
    onSuccess: (newProduct) => {
      queryClient.setQueryData(["products"], (oldProducts) => [newProduct,  ...oldProducts,]);
      toast.success("Product added successfully");
    },
  });

  const updateMutation = useMutation({
    mutationFn: (product) => updateProduct(product),
    onSuccess: ( updatedProduct) => {
      queryClient.setQueryData(["products"], (oldProducts) => oldProducts.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
      toast.success("Product updated successfully");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData(["products"], (oldProducts) => oldProducts.filter((product) => product.id !== id));
      toast.success("Product deleted successfully");
    },
  });
    
  function showAddModal() {
    setSelectedProduct(null);
    setMode("add");
    setShowModal(true);
  }
  function showEditModal(product) {
    setSelectedProduct(product);
    setMode("edit");
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

   function handleSave(product) {
    if (mode === "add") {
      addMutation.mutate(product);
    } else if (mode === "edit") {
      updateMutation.mutate(product);
    }
    closeModal();
  }
    
  function removeProduct(id) {
    deleteMutation.mutate(id);
  }
  
  return (
    <div className="mt-30">

        <div className="flex items-center justify-between p-4">
              <h1>Product Table</h1>
              <button className="bg-blue-400 py-2 px-3 rounded-md shadow-md cursor-pointer" onClick={showAddModal}>Add Product</button>
        </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {isError && (
            <tr>
              <td>{error.message}</td>
            </tr>
          )}
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>
                <img src={product.image} alt="product image" />
              </td>
              <td>
                <button className="bg-blue-400 py-2 px-3 rounded-md shadow-md cursor-pointer" onClick={() =>showEditModal(product)}>Edit</button>
                <button className="bg-red-400 py-2 px-3 rounded-md shadow-md cursor-pointer" onClick={() => removeProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && ( <AddEditModal mode={mode} product={selectedProduct} onSave={handleSave} onCancel={closeModal} />)}
    </div>

  );
};

export default Product;
