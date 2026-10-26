export interface OrderRequest {
  customer: { name: string; phone: string; address: string }
  total: number
  items: { productId: number; quantity: number }[]
}

export interface OrderConfirmation {
  number: string
}

// Demo API adapter. Replace the body with a fetch call when a backend is available.
export async function createOrder(order: OrderRequest): Promise<OrderConfirmation> {
  if (order.items.length === 0) throw new Error('Заказ должен содержать хотя бы один товар')
  await new Promise((resolve) => window.setTimeout(resolve, 450))
  const suffix = String(Date.now()).slice(-6)
  return { number: `LV-${suffix}` }
}
