<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import ProductCard from '@/components/ProductCard/index.vue'
import { products } from '@/config/products'
import { useFavoritesStore } from '@/store/favorites/favoritesStore'
const favorites = useFavoritesStore()
const savedProducts = computed(() => products.filter((product) => favorites.ids.includes(product.id)))
</script>

<template><section class="catalog-page wrap"><div class="eyebrow">СОХРАНЁННЫЕ РАСТЕНИЯ</div><h1>Ваше <em>избранное</em></h1><p class="catalog-intro">Здесь живут растения, которые уже успели вам понравиться.</p><div v-if="savedProducts.length" class="product-grid favorites-grid"><ProductCard v-for="product in savedProducts" :key="product.id" :product="product"/></div><div v-else class="empty-cart"><span class="empty-icon">♡</span><h2>Пока ничего не сохранено</h2><p>Нажмите на сердечко у растения, чтобы не потерять его.</p><RouterLink to="/catalog" class="button button-dark">Открыть каталог <span>↗</span></RouterLink></div></section></template>
