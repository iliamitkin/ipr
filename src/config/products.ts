import type { Product } from '@/types/Product'
import plant1 from '@/assets/images/plant-1.svg'
import plant2 from '@/assets/images/plant-2.svg'
import plant3 from '@/assets/images/plant-3.svg'
import plant4 from '@/assets/images/plant-4.svg'
import plant5 from '@/assets/images/plant-5.svg'
import plant6 from '@/assets/images/plant-6.svg'
import plant7 from '@/assets/images/plant-7.svg'
import plant8 from '@/assets/images/plant-8.svg'

const productImages = [plant1, plant2, plant3, plant4, plant5, plant6, plant7, plant8]

export const products: Product[] = [
  { id: 1, name: 'Монстера деликатесная', category: 'Для дома', price: 2490, oldPrice: 2990, image: productImages[0], tag: 'Хит', description: 'Эффектное тропическое растение с резными листьями. Быстро растёт и легко адаптируется к домашним условиям.', light: 'Рассеянный свет' },
  { id: 2, name: 'Фикус эластика', category: 'Для дома', price: 1890, image: productImages[1], description: 'Неприхотливый фикус с плотными глянцевыми листьями. Отличный выбор для начинающих.', light: 'Яркий свет' },
  { id: 3, name: 'Пальма арека', category: 'Для дома', price: 3290, image: productImages[2], tag: 'Новинка', description: 'Воздушная тропическая пальма, которая добавит интерьеру ощущение отпуска.', light: 'Полутень' },
  { id: 4, name: 'Замиокулькас', category: 'Для дома', price: 1590, oldPrice: 1890, image: productImages[3], description: 'Стильное и выносливое растение, которому не нужен сложный уход.', light: 'Тень или полутень' },
  { id: 5, name: 'Лаванда в горшке', category: 'Для сада', price: 990, image: productImages[4], tag: 'Ароматная', description: 'Душистая лаванда для балкона, террасы или солнечного подоконника.', light: 'Прямое солнце' },
  { id: 6, name: 'Кашпо «Терра»', category: 'Аксессуары', price: 790, image: productImages[5], description: 'Минималистичное керамическое кашпо ручной работы в тёплом природном оттенке.', light: 'Керамика · 14 см' },
  { id: 7, name: 'Пеперомия', category: 'Для дома', price: 1190, image: productImages[6], description: 'Компактная красавица с сочными листьями. Хорошо чувствует себя даже в небольшом пространстве.', light: 'Рассеянный свет' },
  { id: 8, name: 'Набор для ухода', category: 'Аксессуары', price: 1450, image: productImages[7], tag: 'Подарок', description: 'Всё необходимое для заботы о зелёных друзьях: секатор, лопатка и распылитель.', light: '3 предмета' },
]
