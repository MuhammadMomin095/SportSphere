import { NextResponse } from "next/server"
import ShipEngine from "shipengine"

// Initialize ShipEngine with your API key
const shipengine = new ShipEngine("YOUR_SHIPENGINE_API_KEY")

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const label = await shipengine.createLabelFromShipmentDetails({
      shipment: {
        serviceCode: body.serviceCode,  // Correct property name
        shipTo: body.shipTo,            // Updated property name
        shipFrom: body.shipFrom,        // Updated property name
        packages: body.packages,
        carrierId: body.carrierId,      // Add carrierId (you may need to fetch this dynamically)
        shipDate: body.shipDate,        // Add shipDate (could be Date.now() or any other valid date)
      }
    })

    return NextResponse.json({ success: true, label })
  } catch (error) {
    console.error("ShipEngine Error:", error)
    return NextResponse.json({ success: false, error: "Failed to create shipping label" }, { status: 500 })
  }
}

