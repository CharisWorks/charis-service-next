"use client"

const meili_address = process.env.NEXT_PUBLIC_MEILI_ADDRESS ?? "http://localhost"
const meili_api_key = process.env.NEXT_PUBLIC_MEILI_KEY
const meili_port = process.env.NEXT_PUBLIC_MEILI_PORT ?? "7700"
const meiliFetcher = async (url: string) => {
    const res = await fetch(url, {
        "method": 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${meili_api_key}`
        })
    })
    const data = await res.json()
    if (res.status !== 200) {

        throw new Error(data.message)
    }
    return data
}

export const Search = async (params?: string[]) => {
    const rawURL = new URL(meili_address ?? `${meili_address}:${meili_port}`)
    rawURL.pathname = '/indexes/items/search'
    console.log("params:", params)
    for (const param of params ?? []) {
        rawURL.searchParams.append('q', param)
    }
    const url = rawURL.toString()
    const data = await meiliFetcher(url)
    return {
        data: data as MeiliItem | undefined,

    }
}

export type MeiliItem = {
    estimatedTotalHits: number
    offset: number
    limit: number
    processingTimeMs: number
    query: string
    hits: MeiliItemHit[]
}

export type MeiliItemHit = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    item_name: string
    description: string
    genre: string
    price: number
    stock: number
    worker: string
    worker_description: string
    thumbnail_url: string
    images: MeiliItemImage[]
    tags: string[]
}

type MeiliItemImage = {
    large_url: string
    medium_url: string
    small_url: string
}