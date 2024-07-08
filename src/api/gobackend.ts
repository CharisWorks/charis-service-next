"use client"

const backend_address = process.env.NEXT_PUBLIC_BACKEND_ADDRESS ?? "http://localhost"
const backend_port = process.env.NEXT_PUBLIC_BACKEND_PORT ?? "8080"
const checkoutFetcher = async (url: string, payload: CheckoutPayload) => {
    const res = await fetch(url, {
        "method": 'POST',
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        body: JSON.stringify(payload)
    })
    const data = await res.json()
    if (res.status !== 200) {

        throw new Error(data.message)
    }
    return data
}

export const Checkout = async (params: { itemId: number, quantity: number }) => {
    const rawURL = new URL(`${backend_address}:${backend_port}`)
    rawURL.pathname = '/checkout'
    console.log("params:", params)
    if (!params.itemId) {
        throw new Error("itemId is required")
    }
    if (!params.quantity) {
        throw new Error("quantity is required")
    }
    if (params.quantity <= 0) {
        throw new Error("quantity must be greater than 0")
    }
    let payload = {
        item_id: params.itemId,
        quantity: params.quantity
    }
    const url = rawURL.toString()
    const data = await checkoutFetcher(url, payload)
    return {
        data: data as PurchaseLink | undefined,

    }
}
type CheckoutPayload = {
    item_id: number
    quantity: number
}
type PurchaseLink = {
    url: string
}