<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { createOrder } from '@/api/orders'
import { formatPrice } from '@/helpers/formatPrice'
import { useCartStore } from '@/store/cart/cartStore'
const cart = useCartStore()
const ordered = ref(false)
const checkoutOpen = ref(false)
const isSubmitting = ref(false)
const orderNumber = ref('')
const customer = ref({ name: '', phone: '', address: '' })
async function placeOrder() {
  isSubmitting.value = true
  try {
    const order = await createOrder({
      customer: { ...customer.value },
      total: cart.total + (cart.total >= 4000 ? 0 : 300),
      items: cart.items.map(({ product, quantity }) => ({ productId: product.id, quantity })),
    })
    orderNumber.value = order.number
    ordered.value = true
    checkoutOpen.value = false
    cart.clear()
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template><section class="cart-page wrap"><div class="eyebrow">ВАШ ЗЕЛЁНЫЙ ВЫБОР</div><h1>Корзина<span v-if="cart.count"> <em>({{ cart.count }})</em></span></h1><div v-if="ordered" class="empty-cart"><span class="empty-icon">✳</span><h2>Спасибо за заказ!</h2><p>Номер заказа {{ orderNumber }}. Мы скоро свяжемся с вами, чтобы подтвердить доставку.</p><RouterLink to="/catalog" class="button button-dark">Вернуться в каталог <span>↗</span></RouterLink></div><div v-else-if="!cart.items.length" class="empty-cart"><span class="empty-icon">✳</span><h2>Здесь пока тихо и пусто</h2><p>Самое время найти растение, которое станет вашим.</p><RouterLink to="/catalog" class="button button-dark">Перейти в каталог <span>↗</span></RouterLink></div><div v-else class="cart-layout"><div class="cart-items"><article v-for="item in cart.items" :key="item.product.id" class="cart-item"><img :src="item.product.image" :alt="item.product.name"/><div class="cart-item-info"><span>{{ item.product.category }}</span><h3>{{ item.product.name }}</h3><small>{{ item.product.light }}</small><button class="remove" @click="cart.remove(item.product.id)">Удалить</button></div><div class="quantity"><button @click="cart.changeQuantity(item.product.id, -1)" aria-label="Уменьшить количество">−</button><span>{{ item.quantity }}</span><button @click="cart.changeQuantity(item.product.id, 1)" aria-label="Увеличить количество">+</button></div><strong>{{ formatPrice(item.product.price * item.quantity) }}</strong></article></div><aside class="order-summary"><template v-if="!checkoutOpen"><h2>Ваш заказ</h2><div><span>Товары · {{ cart.count }}</span><span>{{ formatPrice(cart.total) }}</span></div><div><span>Доставка</span><span>{{ cart.total >= 4000 ? 'Бесплатно' : 'от 300 ₽' }}</span></div><div class="summary-total"><b>Итого</b><b>{{ formatPrice(cart.total + (cart.total >= 4000 ? 0 : 300)) }}</b></div><button class="button button-dark checkout" @click="checkoutOpen = true">Оформить заказ <span>↗</span></button><p>Доставка по Москве и области. Оплата при получении.</p></template><form v-else class="checkout-form" @submit.prevent="placeOrder"><button type="button" class="back-link" @click="checkoutOpen = false">← Назад к корзине</button><h2>Данные для доставки</h2><label>Ваше имя<input v-model.trim="customer.name" required minlength="2" autocomplete="name" placeholder="Например, Анна"/></label><label>Телефон<input v-model.trim="customer.phone" required type="tel" autocomplete="tel" placeholder="+7 (___) ___-__-__" pattern="[+0-9()\\s-]{10,}"/></label><label>Адрес доставки<input v-model.trim="customer.address" required minlength="5" autocomplete="street-address" placeholder="Улица, дом, квартира"/></label><button class="button button-dark checkout" type="submit" :disabled="isSubmitting">{{ isSubmitting ? 'Отправляем…' : 'Подтвердить заказ' }} <span>↗</span></button><p>Оплата при получении. Итого: {{ formatPrice(cart.total + (cart.total >= 4000 ? 0 : 300)) }}</p></form></aside></div></section></template>
