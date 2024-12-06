import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export const authContext = createContext()

export function AuthProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const notify = () => { toast.success("Your Product Added to Cart") };
    const notifyRemove = () => { toast.error("Your Product Removed from Cart") };

    const filters =
        products.filter((items) => {
            const matchesSearch = items.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = filtered === "all" || items.category === filtered;
            return matchesSearch && matchesCategory;

        });

    async function GetData() {
        const result = await axios.get("https://fakestoreapi.com/products");
        setProducts(result.data);
    }



    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (products) => {
        setCart((prevCart) => {
            if (prevCart.some(item => item.id === products.id)) {
                notifyRemove();
                return prevCart.filter(item => item.id !== products.id);

            }
            notify()
            return [...prevCart, products];
        });

    };






    useEffect(() => {
        GetData();
    }, []);

    return (
        <authContext.Provider value={{ setFiltered, filters, setSearchTerm, products, products, addToCart, cart, notify }}>
            {children}
        </authContext.Provider>
    )
}