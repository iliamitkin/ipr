export interface Product {
  id: number
  name: string
  category: 'Для дома' | 'Для сада' | 'Аксессуары'
  price: number
  oldPrice?: number
  image: string
  tag?: string
  description: string
  light: string
}
