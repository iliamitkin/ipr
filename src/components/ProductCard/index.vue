<script setup lang="ts">
import type { Product } from '@/types/Product'
import { useCartStore } from '@/store/cart/cartStore'
import { useFavoritesStore } from '@/store/favorites/favoritesStore'
import { formatPrice } from '@/helpers/formatPrice'
import { RouterLink } from 'vue-router'
const props = defineProps<{ product: Product }>()
const cart = useCartStore()
const favorites = useFavoritesStore()
function addToCart() { cart.add(props.product) }
</script>

<template>
  <article class="product-card">
    <div class="product-image"><RouterLink :to="`/catalog/${product.id}`" class="image-link"><img :src="product.image" :alt="product.name" loading="lazy" /></RouterLink><span v-if="product.tag" class="tag">{{ product.tag }}</span><button class="favorite-toggle" :class="{ saved: favorites.has(product.id) }" @click="favorites.toggle(product.id)" :aria-label="favorites.has(product.id) ? 'Убрать из избранного' : 'В избранное'">{{ favorites.has(product.id) ? '♥' : '♡' }}</button><button class="quick-add" @click="addToCart" :aria-label="`Добавить ${product.name} в корзину`">+</button></div>
    <div class="product-info"><div class="product-category">{{ product.category }}</div><RouterLink class="product-title" :to="`/catalog/${product.id}`"><h3>{{ product.name }}</h3></RouterLink><div class="product-bottom"><div><strong>{{ formatPrice(product.price) }}</strong><del v-if="product.oldPrice">{{ formatPrice(product.oldPrice) }}</del></div><button class="text-add" @click="addToCart">В корзину <span>↗</span></button></div></div>
  </article>
</template>

<style scoped lang="scss" src="./index.scss"></style>
