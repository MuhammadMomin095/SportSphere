"use client"

import { createContext, useContext, useState, useEffect, useCallback } from "react"

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
  updateItemQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  toggleWishlist: (id: string) => void
  isInWishlist: (id: string) => boolean
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const STORAGE_KEYS = {
  CART_ITEMS: "cart-items",
  WISHLIST: "wishlist",
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])

  useEffect(() => {
    const storedItems = localStorage.getItem(STORAGE_KEYS.CART_ITEMS)
    const storedWishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST)
    if (storedItems) setItems(JSON.parse(storedItems))
    if (storedWishlist) setWishlist(JSON.parse(storedWishlist))
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CART_ITEMS, JSON.stringify(items))
  }, [items])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist))
  }, [wishlist])

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  const addItem = useCallback((newItem: CartItem) => {
    setItems((prev) => {
      const existingItem = prev.find((item) => item.id === newItem.id)
      if (existingItem) {
        return prev.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + (newItem.quantity || 1) } : item,
        )
      }
      return [...prev, { ...newItem, quantity: newItem.quantity || 1 }]
    })
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateItemQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item)))
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]))
  }, [])

  const isInWishlist = useCallback((id: string) => wishlist.includes(id), [wishlist])

  const getTotalPrice = useCallback(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }, [items])

  const contextValue: CartContextType = {
    items,
    itemCount,
    wishlist,
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
    toggleWishlist,
    isInWishlist,
    getTotalPrice,
  }

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

