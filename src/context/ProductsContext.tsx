// import { createContext, useContext } from "react";
// import type {Product}  from "../types/Product";
// // import { useProduct } from "../hooks/useProducts";

// interface ProductsContexState {
//     products: Product[];
//     setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
//     loading: boolean;
//     error: string | null;
//     cancelFetch: () => void;
// }

// const ProductContext = createContext<ProductsContexState | undefined>(undefined);

// export const ProductsContextProvider = ({children}:{children:React.ReactNode}) => {
//     const products = useProduct();
//     return (
//         <ProductContext.Provider value= {products}>
//             {children}
//         </ProductContext.Provider>
//     )
// } 

// // eslint-disable-next-line react-refresh/only-export-components
// export const useProductContext = () => {
//     const context = useContext(ProductContext);

//     if(!context) throw new Error("NO SE PUEDE USAR EL HOOK FUERA DEL PROVIDER");

//     return context;
// };