import { NextResponse } from "next/server"
import ShipEngine from "shipengine"

// Initialize ShipEngine with your API key
const shipengine = new ShipEngine("YOUR_SHIPENGINE_API_KEY")

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const label = await shipengine.createLabel({
      shipment: {
        service_code: body.serviceCode,
        ship_to: body.shipTo,
        ship_from: body.shipFrom,
        packages: body.packages,
      },
    })

    return NextResponse.json({ success: true, label })
  } catch (error) {
    console.error("ShipEngine Error:", error)
    return NextResponse.json({ success: false, error: "Failed to create shipping label" }, { status: 500 })
  }
}

