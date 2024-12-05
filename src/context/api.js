import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export const authContext = createContext()

export function AuthProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState("all");
    const [search, setSearch] = useState(products);

    const filters =
        filtered === "all"
            ? products
            : products.filter((items) => {
                return items.category === filtered;
            });

    async function GetData() {
        const result = await axios.get("https://fakestoreapi.com/products");
        setProducts(result.data);
    }


    useEffect(() => {
        GetData();
    }, []);

    return (
        <authContext.Provider value={{ setFiltered, filters, search, setSearch, products }}>
            {children}
        </authContext.Provider>
    )
}