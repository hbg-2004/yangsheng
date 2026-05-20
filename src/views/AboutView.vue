<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-vue-next'

const team = [
  {
    name: '李明',
    role: '健康管理师',
    bio: '10年健康管理经验，专注于科学减脂和营养指导',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
  },
  {
    name: '王芳',
    role: '睡眠专家',
    bio: '注册睡眠医学专家，帮助数千人改善睡眠质量',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
  },
  {
    name: '张静',
    role: '冥想导师',
    bio: '正念减压认证导师，倡导活在当下的生活理念',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
  },
  {
    name: '陈健康',
    role: '老年医学专家',
    bio: '专注中老年健康管理，提供科学的养生建议',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  }
]

const values = [
  '所有内容由专业人士审核',
  '基于循证医学研究',
  '坚持原创，拒绝抄袭',
  '持续更新，与时俱进',
  '用户隐私和数据安全'
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="font-serif text-5xl font-bold mb-6">关于养生生活</h1>
        <p class="text-xl max-w-3xl mx-auto opacity-90">
          我们致力于为追求健康生活方式的人群提供科学、专业、实用的健康内容
        </p>
      </div>
    </section>

    <!-- Mission -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="font-serif text-4xl font-bold text-dark mb-6">我们的使命</h2>
            <p class="text-gray-700 text-lg mb-6 leading-relaxed">
              在这个信息爆炸的时代，健康相关的知识和产品琳琅满目，但真正科学、实用的内容却难以寻找。养生生活应运而生，旨在成为你值得信赖的健康伙伴。
            </p>
            <p class="text-gray-700 text-lg mb-6 leading-relaxed">
              我们相信，健康不是一蹴而就的目标，而是一种持续的生活方式。通过科学的方法、实用的技巧和优质的产品推荐，我们帮助你一步步迈向更健康的自己。
            </p>
            <RouterLink to="/" class="btn-primary inline-flex items-center gap-2">
              开始探索
            </RouterLink>
          </div>
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"
              alt="健康生活"
              class="rounded-xl shadow-lg"
            />
            <div class="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6">
              <div class="text-4xl font-bold text-primary mb-1">100+</div>
              <div class="text-gray-600">精选文章</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="font-serif text-4xl font-bold text-dark mb-4">我们的原则</h2>
          <p class="text-gray-600 text-lg">内容质量是我们的生命线</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="value in values"
            :key="value"
            class="flex items-start gap-3 p-6 bg-gray-50 rounded-xl"
          >
            <CheckCircle class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 font-medium">{{ value }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="font-serif text-4xl font-bold text-dark mb-4">专家团队</h2>
          <p class="text-gray-600 text-lg">由资深专业人士组成，为你把关内容质量</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="member in team"
            :key="member.name"
            class="card p-6 text-center"
          >
            <img
              :src="member.image"
              :alt="member.name"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 class="font-serif text-xl font-semibold text-dark mb-1">
              {{ member.name }}
            </h3>
            <p class="text-primary font-medium mb-3">{{ member.role }}</p>
            <p class="text-gray-600 text-sm">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="font-serif text-4xl font-bold text-dark mb-4">联系我们</h2>
          <p class="text-gray-600 text-lg">合作、咨询或建议，我们随时欢迎</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="text-center p-6 bg-gray-50 rounded-xl">
            <Mail class="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 class="font-semibold text-dark mb-2">邮箱</h3>
            <p class="text-gray-600">business@example.com</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl">
            <Phone class="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 class="font-semibold text-dark mb-2">电话</h3>
            <p class="text-gray-600">400-888-8888</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl">
            <MapPin class="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 class="font-semibold text-dark mb-2">地址</h3>
            <p class="text-gray-600">上海市浦东新区</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
