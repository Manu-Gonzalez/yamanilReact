
export interface Product {
    id: number;
    nombre: string;
    precio_unidad: number;
    id_categoria: number;
}

export interface ProductByCategory extends Product {
    categoria: {
        id: number,
        nombre: string
    }
}