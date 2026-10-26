<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '@/store/cart/cartStore'
import { useFavoritesStore } from '@/store/favorites/favoritesStore'
const cart = useCartStore()
const favorites = useFavoritesStore()
</script>

<template>
  <div class="announcement">Бесплатная доставка при заказе от 4 000 ₽ <span>✦</span> Забота о каждом листочке</div>
  <header class="header">
    <div class="header-inner wrap">
      <RouterLink class="brand" to="/"><span class="brand-mark">л</span><span>листва<small>РАСТЕНИЯ И ЗАБОТА</small></span></RouterLink>
      <nav><RouterLink to="/catalog">Каталог</RouterLink><RouterLink to="/favorites">Избранное <span class="nav-count">{{ favorites.count }}</span></RouterLink><a href="/#about">О нас</a><a href="/#care">Уход за растениями</a></nav>
      <RouterLink to="/cart" class="cart-link" aria-label="Корзина">Корзина <span class="cart-count">{{ cart.count }}</span></RouterLink>
    </div>
  </header>
  <main><RouterView /></main>
  <footer class="footer"><div class="wrap footer-inner"><RouterLink class="brand" to="/"><span class="brand-mark">л</span><span>листва<small>РАСТЕНИЯ И ЗАБОТА</small></span></RouterLink><p>Растения, которые делают дом теплее.</p><span>© 2025 Листва</span></div></footer>
</template>
