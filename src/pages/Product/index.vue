<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import ProductCard from '@/components/ProductCard/index.vue'
import { products } from '@/config/products'
import { useCartStore } from '@/store/cart/cartStore'
import { useFavoritesStore } from '@/store/favorites/favoritesStore'
import { formatPrice } from '@/helpers/formatPrice'

const props = defineProps<{ id: string }>()
const product = computed(() => products.find((item) => item.id === Number(props.id)))
const related = computed(() => products.filter((item) => item.id !== product.value?.id && item.category === product.value?.category).slice(0, 3))
const cart = useCartStore()
const favorites = useFavoritesStore()
const router = useRouter()
function addToCart() {
  if (!product.value) return
  cart.add(product.value)
  router.push('/cart')
}
</script>

<template>
  <section v-if="product" class="product-page wrap">
    <div class="breadcrumbs"><RouterLink to="/">Главная</RouterLink><span>/</span><RouterLink to="/catalog">Каталог</RouterLink><span>/</span><span>{{ product.name }}</span></div>
    <div class="product-detail"><div class="detail-image"><img :src="product.image" :alt="product.name"/><span v-if="product.tag" class="tag">{{ product.tag }}</span></div><div class="detail-copy"><div class="eyebrow">{{ product.category.toUpperCase() }} · АРТИКУЛ LV-{{ String(product.id).padStart(3, '0') }}</div><h1>{{ product.name }}</h1><div class="detail-rating">★★★★★ <span>4.9 · 28 отзывов</span></div><p class="detail-description">{{ product.description }}</p><div class="detail-price"><strong>{{ formatPrice(product.price) }}</strong><del v-if="product.oldPrice">{{ formatPrice(product.oldPrice) }}</del></div><div class="detail-facts"><div><span>☼</span><p><b>Освещение</b><small>{{ product.light }}</small></p></div><div><span>♡</span><p><b>Уход</b><small>Простой, подойдёт новичкам</small></p></div><div><span>♧</span><p><b>Доставка</b><small>Бережно упакуем за 1–2 дня</small></p></div></div><div class="detail-actions"><button class="button button-dark" @click="addToCart">Добавить в корзину <span>↗</span></button><button class="detail-favorite" :class="{ saved: favorites.has(product.id) }" @click="favorites.toggle(product.id)">{{ favorites.has(product.id) ? '♥ В избранном' : '♡ В избранное' }}</button></div><p class="delivery-note">Бесплатная доставка от 4 000 ₽ · Растение приедет в защитной упаковке</p></div></div>
    <div v-if="related.length" class="related"><div class="section-heading"><div><div class="eyebrow">МАЛЕНЬКОЕ ЗЕЛЁНОЕ СООБЩЕСТВО</div><h2>С этим берут</h2></div><RouterLink to="/catalog" class="inline-link">Весь каталог <span>↗</span></RouterLink></div><div class="product-grid"><ProductCard v-for="item in related" :key="item.id" :product="item"/></div></div>
  </section>
  <section v-else class="empty-cart wrap"><h2>Такого растения нет в каталоге</h2><RouterLink class="button button-dark" to="/catalog">Вернуться в каталог <span>↗</span></RouterLink></section>
</template>
