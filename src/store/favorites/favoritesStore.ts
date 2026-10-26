import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {
  const ids = ref<number[]>(JSON.parse(localStorage.getItem('listva-favorites') || '[]'))
  const count = computed(() => ids.value.length)
  watch(ids, (value) => localStorage.setItem('listva-favorites', JSON.stringify(value)), { deep: true })
  function has(id: number) { return ids.value.includes(id) }
  function toggle(id: number) { ids.value = has(id) ? ids.value.filter((savedId) => savedId !== id) : [...ids.value, id] }
  return { ids, count, has, toggle }
})
