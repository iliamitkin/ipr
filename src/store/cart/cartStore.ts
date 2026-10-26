import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types/Product'
import { products } from '@/config/products'

function loadCart(): { product: Product; quantity: number }[] {
  try {
    const stored = JSON.parse(localStorage.getItem('listva-cart') || '[]') as { product?: { id?: number }; quantity?: number }[]
    return stored.flatMap((entry) => {
      const product = products.find((item) => item.id === entry.product?.id)
      const quantity = Number(entry.quantity)
      return product && Number.isFinite(quantity) && quantity > 0 ? [{ product, quantity }] : []
    })
  } catch {
    return []
  }
}

export const useCartStore = defineStore('cart', () => {
  // Resolve saved items from the current catalog so stale product data cannot keep broken image URLs.
  const items = ref<{ product: Product; quantity: number }[]>(loadCart())
  const count = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0))
  const total = computed(() => items.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0))
  watch(items, (value) => localStorage.setItem('listva-cart', JSON.stringify(value)), { deep: true })

  function add(product: Product) {
    const existing = items.value.find((item) => item.product.id === product.id)
    if (existing) existing.quantity++
    else items.value.push({ product, quantity: 1 })
  }
  function changeQuantity(id: number, delta: number) {
    const item = items.value.find((entry) => entry.product.id === id)
    if (!item) return
    item.quantity += delta
    if (item.quantity <= 0) remove(id)
  }
  function remove(id: number) { items.value = items.value.filter((item) => item.product.id !== id) }
  function clear() { items.value = [] }
  return { items, count, total, add, changeQuantity, remove, clear }
})
