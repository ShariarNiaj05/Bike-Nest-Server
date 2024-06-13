export type TBike = {
  name: string
  description: string
  pricePerHour: number
  isAvailable?: boolean // optional, defaults to true if not provided
  cc: number
  year: number
  model: string
  brand: string
}
