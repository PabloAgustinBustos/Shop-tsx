import React, { createContext, ReactNode, useContext, useState } from 'react'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void

  cartQuantity: number,
  cartItems: CartItem[]
}

type CartItem = {
  id: number
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

// Por si alguien quiere acceder a las actions
export const useCartContext = () => useContext(ShoppingCartContext)

// se arma el provider
export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const getItemQuantity = (id: number) => cartItems.find(item => item.id === id)?.quantity || 0

  const increaseCartQuantity = (id: number) => {
    setCartItems(current => {
      if(current.find(item => item.id === id) == null){
        return [
          ...current,
          {
            id,
            quantity: 1
          },
        ]
      }else{
        return current.map(item => item.id === id ? ({...item, quantity: item.quantity+1}) : item)
      }
    })
  }

  const decreaseCartQuantity = (id: number) => {
    setCartItems(current => {
      if(current.find(item => item.id === id)?.quantity === 1){
        return current.filter(item => item.id !== id)
      }else{
        return current.map(item => item.id === id ? ({...item, quantity: item.quantity-1}) : item)
      }
    })
  }

  const removeFromCart = (id: number) => setCartItems(current => current.filter(item => item.id !== id))
  
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return (<ShoppingCartContext.Provider value={{
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
    cartQuantity,
    openCart,
    closeCart
  }}>
    {children}
  </ShoppingCartContext.Provider>)
}