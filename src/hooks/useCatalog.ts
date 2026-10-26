import { computed, ref } from 'vue'
import { products } from '@/config/products'

export const catalogCategories = ['Все растения', 'Для дома', 'Для сада', 'Аксессуары'] as const
export type CatalogSort = 'popular' | 'price-asc' | 'price-desc'

export function useCatalog() {
  const activeCategory = ref<(typeof catalogCategories)[number]>('Все растения')
  const search = ref('')
  const sort = ref<CatalogSort>('popular')

  const filtered = computed(() => {
    const query = search.value.trim().toLocaleLowerCase('ru-RU')
    const result = products.filter((product) => {
      const categoryMatches = activeCategory.value === 'Все растения' || product.category === activeCategory.value
      return categoryMatches && `${product.name} ${product.category} ${product.description}`.toLocaleLowerCase('ru-RU').includes(query)
    })
    if (sort.value === 'price-asc') result.sort((a, b) => a.price - b.price)
    if (sort.value === 'price-desc') result.sort((a, b) => b.price - a.price)
    return result
  })

  function reset() {
    activeCategory.value = 'Все растения'
    search.value = ''
    sort.value = 'popular'
  }

  return { categories: catalogCategories, activeCategory, search, sort, filtered, reset }
}
