"use client";

import { ShippingLabelCreator } from "@/components/shipping-label-creator"
import { useCart } from "@/components/providers/cart-provider"

export default function CheckoutPage() {
  const { items, clearCart } = useCart()

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 200 // Example shipping cost
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-28 py-60">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <ShippingLabelCreator />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Order Summary</h2>

          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>Rs. {item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. {subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Rs. {shipping}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>Rs. {total}</span>
            </div>
          </div>

          <button
            onClick={() => {
              // Here you would typically process the payment
              // For now, we'll just clear the cart
              clearCart()
              alert("Order placed successfully!")
            }}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

