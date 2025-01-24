"use client"

import { createContext, useContext, useState, useEffect } from "react"

type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

type CartContextType = {
  items: CartItem[]
  itemCount: number
  wishlist: string[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  toggleWishlist: (id: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])

  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems")
    const storedWishlist = localStorage.getItem("wishlist")
    if (storedItems) setItems(JSON.parse(storedItems))
    if (storedWishlist) setWishlist(JSON.parse(storedWishlist))
    const storedCartItems = localStorage.getItem("cart-items")
    if (storedCartItems) {
      setItems(JSON.parse(storedCartItems))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items))
    localStorage.setItem("cart-items", JSON.stringify(items))
  }, [items])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existingItem = prev.find((item) => item.id === newItem.id)
      if (existingItem) {
        return prev.map((item) =>
          item.id === newItem.id ? { ...item, quantity: newItem.quantity || item.quantity + 1 } : item,
        )
      }
      return [...prev, { ...newItem, quantity: newItem.quantity || 1 }]
    })
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setItems([])
  }

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]))
  }

  return (
    <CartContext.Provider value={{ items, itemCount, wishlist, addItem, removeItem, clearCart, toggleWishlist }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

