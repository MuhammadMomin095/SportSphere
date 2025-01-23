"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface ShippingAddress {
  name: string
  address_line1: string
  city_locality: string
  state_province: string
  postal_code: string
  country_code: string
}

export function ShippingLabelCreator() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [shipTo, setShipTo] = useState<ShippingAddress>({
    name: "",
    address_line1: "",
    city_locality: "",
    state_province: "",
    postal_code: "",
    country_code: "PK", // Default to Pakistan
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/shipping/create-label", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceCode: "ups_ground", // You may want to make this selectable
          shipTo,
          shipFrom: {
            name: "The Sport Store",
            address_line1: "123 Main St",
            city_locality: "Karachi",
            state_province: "Sindh",
            postal_code: "74000",
            country_code: "PK",
          },
          packages: [
            {
              weight: {
                value: 1.0,
                unit: "kilogram",
              },
            },
          ],
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Shipping label created",
          description: "Your shipping label has been created successfully.",
        })
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create shipping label. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={shipTo.name}
          onChange={(e) => setShipTo({ ...shipTo, name: e.target.value })}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          id="address"
          value={shipTo.address_line1}
          onChange={(e) => setShipTo({ ...shipTo, address_line1: e.target.value })}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          City
        </label>
        <input
          type="text"
          id="city"
          value={shipTo.city_locality}
          onChange={(e) => setShipTo({ ...shipTo, city_locality: e.target.value })}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
          State/Province
        </label>
        <input
          type="text"
          id="state"
          value={shipTo.state_province}
          onChange={(e) => setShipTo({ ...shipTo, state_province: e.target.value })}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
          Postal Code
        </label>
        <input
          type="text"
          id="zipcode"
          value={shipTo.postal_code}
          onChange={(e) => setShipTo({ ...shipTo, postal_code: e.target.value })}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {loading ? "Creating Label..." : "Create Shipping Label"}
      </button>
    </form>
  )
}

