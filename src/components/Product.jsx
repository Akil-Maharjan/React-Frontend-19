import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../api/Product";
import { useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";
import AddEditModal from "./Modals/AddEditModal";
import { ThemeContext } from "./context/ThemeContext";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";



const Product = () => {
  const {theme} = useContext(ThemeContext)
  const queryClient = useQueryClient();
  const [mode, setMode] = useState("add");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [serach, setSerach] = useState("");
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
      queryClient.setQueryData(["products"], (oldProducts) => [
        newProduct,
        ...oldProducts,
      ]);
      toast.success("Product added successfully");

    },
  });

  const updateMutation = useMutation({
    mutationFn: (product) => updateProduct(product),
    onSuccess: (updatedProduct) => {
      queryClient.setQueryData(["products"], (oldProducts) =>
        oldProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product,
        ),
      );
      toast.success("Product updated successfully");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData(["products"], (oldProducts) =>
        oldProducts.filter((product) => product.id !== id),
      );
      toast.success("Product deleted successfully");
    },
  });

  const serachedProduct =useMemo(() => products.filter((product) =>
    product.title.toLowerCase().includes(serach.toLowerCase()),
  )
  , [products, serach]);

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
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} pt-30 px-20`}>
      <div className="flex items-center justify-between p-4">
        <h1>Product Table</h1>

         <input 
         type="text"
         placeholder="Search"
         value={serach}
         onChange={(e) => setSerach(e.target.value)}
         className="border focus:outline-none rounded-md px-3 py-2"
         />
        <button
          className="bg-blue-400 py-2 px-3 rounded-md shadow-md cursor-pointer"
          onClick={showAddModal}
        >
          Add Product
        </button>
      </div>
      
   <Table >
    <TableHeader className="text-white">
      <TableRow className="text-white" >
          <TableHead className="text-white">ID</TableHead>
          <TableHead className="text-white">Title</TableHead>
          <TableHead className="text-white">Description</TableHead>
          <TableHead className="text-white">Price</TableHead>
          <TableHead className="text-white">Category</TableHead>
          <TableHead className="text-white">Image</TableHead>
          <TableHead className="text-white">Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>

       {serachedProduct.map((product) => (
        <TableRow key={product.id}>
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.title}</TableCell>
          <TableCell className="max-w-[500px] truncate">{product.description}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>{product.category}</TableCell>
          <TableCell> <img src={product.image} alt={product.title} /></TableCell>
          <TableCell>
            <button
              className="bg-blue-400 py-2 px-3 rounded-md shadow-md cursor-pointer"
              onClick={() => showEditModal(product)}
            >
              Edit
            </button>
            <button
              className="bg-red-400 py-2 px-3 rounded-md shadow-md cursor-pointer"
              onClick={() => removeProduct(product.id)}
            >
              Delete
            </button>
          </TableCell>
        </TableRow>
       ))}
    </TableBody>
   </Table>

            {showModal && (
        <AddEditModal
          mode={mode}
          product={selectedProduct}
          onSave={handleSave}
          onCancel={closeModal}
        />
      )}
    </div>
  );
};

export default Product;
