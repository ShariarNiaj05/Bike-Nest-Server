export type TBike = {
  _id: string
  name: string
  description: string
  pricePerHour: number
  imageUrl: string
  isAvailable?: boolean // optional, defaults to true if not provided
  cc: number
  year: number
  model: string
  brand: string
}
