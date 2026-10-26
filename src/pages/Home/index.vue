<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProductCard from '@/components/ProductCard/index.vue'
import { products } from '@/config/products'
import heroImage from '@/assets/images/hero.svg'
import careImage from '@/assets/images/care.svg'
const featured = products.slice(0, 4)
</script>

<template>
  <section class="hero wrap"><div class="hero-copy"><div class="eyebrow"><span></span> МАЛЕНЬКИЙ САД У ВАС ДОМА</div><h1>Пусть дома<br />будет <em>зеленее</em></h1><p>Подберём растения, которые подружатся с вашим домом. Бережно упакуем и привезём к вашей двери.</p><RouterLink to="/catalog" class="button button-dark">Выбрать растение <span>↗</span></RouterLink><div class="hero-note"><span class="note-icon">✳</span><span>Каждое растение проверяет<br />наш заботливый ботаник</span></div></div><div class="hero-art"><img :src="heroImage" alt="Солнечные листья домашних растений" /><div class="art-stamp"><span>растёт<br />с любовью</span><b>✳</b></div><div class="image-caption">ЗЕЛЕНЬ, КОТОРАЯ ВДОХНОВЛЯЕТ</div></div><div class="hero-side">01 — 08&nbsp;&nbsp; РАСТЕНИЯ ДЛЯ ЖИЗНИ</div></section>
  <section class="benefits"><div class="wrap benefits-grid"><div><span>01</span><b>С любовью отобраны</b><small>Здоровые растения из питомников</small></div><div><span>02</span><b>Доедут в целости</b><small>Бережная упаковка и доставка</small></div><div><span>03</span><b>Подскажем, как заботиться</b><small>Памятка к каждому заказу</small></div></div></section>
  <section class="section wrap" id="catalog"><div class="section-heading"><div><div class="eyebrow">НАШИ ФАВОРИТЫ</div><h2>Зелёные <em>любимцы</em></h2></div><RouterLink to="/catalog" class="inline-link">Весь каталог <span>↗</span></RouterLink></div><div class="product-grid"><ProductCard v-for="product in featured" :key="product.id" :product="product" /></div></section>
  <section class="care-banner" id="care"><div class="wrap care-inner"><div><div class="eyebrow">НЕ НУЖЕН ЗЕЛЁНЫЙ ПАЛЕЦ</div><h2>Растения любят<br />внимание. <em>Мы научим.</em></h2><p>Собрали короткие подсказки по поливу, свету и пересадке — чтобы ваша домашняя оранжерея росла с радостью.</p><RouterLink class="inline-link" to="/catalog">Найти своё растение <span>↗</span></RouterLink></div><div class="care-visual"><img :src="careImage" alt="Уход за растением"/><span>ЗАБОТА<br />РАСТЁТ<br /><em>ВМЕСТЕ</em></span></div></div></section>
  <section class="newsletter wrap" id="about"><div class="newsletter-flower">✳</div><div><div class="eyebrow">ПИСЬМА ИЗ ЗЕЛЁНОЙ КОМНАТЫ</div><h2>Пусть хорошее <em>растёт</em></h2><p>Новинки, советы и немного зелёного вдохновения раз в месяц.</p></div><form @submit.prevent="($event.target as HTMLFormElement).reset()"><input type="email" required placeholder="Ваш e-mail" aria-label="Ваш e-mail"/><button aria-label="Подписаться">↗</button></form></section>
</template>
