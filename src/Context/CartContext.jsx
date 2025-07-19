import { createContext, useState, useEffect } from "react";
import { useContext } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('/data/data.json')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setTimeout(() => {
                    setProducts(datos);
                    setLoading(false);
                }, 3000);
            })
            .catch(error => {
                console.error("Error", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const agregarCarrito = (product) => {
        const productInCart = cart.find(item => item.id === product.id);
        if (productInCart) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }
    const eliminarDelCarrito = (id) => {
        setCart(prevCart =>
            prevCart.map(item => {
                if (item.id === id) {
                    return item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : null;
                }
                return item;
            }).filter(item => item !== null)
        );
    };
            const deleteFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

         const limpiarCarrito = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{
             cart, setCart, products, setProducts, agregarCarrito, 
            eliminarDelCarrito, limpiarCarrito, deleteFromCart, loading, error }}>

            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
