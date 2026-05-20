<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Flame, Moon, Brain, Pill, Heart, Briefcase } from 'lucide-vue-next'
import ArticleCard from '@/components/ArticleCard.vue'
import { categories } from '@/data/categories'
import { articles } from '@/data/articles'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const currentCategory = computed(() => {
  return categories.find(c => c.slug === slug.value)
})

const filteredArticles = computed(() => {
  return articles.filter(article => article.category === slug.value)
})

const iconMap: Record<string, any> = {
  Flame,
  Moon,
  Brain,
  Pill,
  Heart,
  Briefcase
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Category Header -->
    <section
      v-if="currentCategory"
      :class="`bg-gradient-to-br ${currentCategory.color} text-white py-16`"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <component :is="iconMap[currentCategory.icon]" class="w-8 h-8" />
          </div>
          <div>
            <h1 class="font-serif text-4xl font-bold mb-2">
              {{ currentCategory.name }}
            </h1>
            <p class="text-white/90 text-lg">
              {{ currentCategory.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-8">
          <h2 class="font-serif text-2xl font-bold text-dark">
            相关文章 ({{ filteredArticles.length }})
          </h2>
        </div>

        <div v-if="filteredArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard
            v-for="article in filteredArticles"
            :key="article.id"
            :article="article"
          />
        </div>

        <div v-else class="text-center py-16">
          <p class="text-gray-500 text-lg">暂无相关文章</p>
        </div>
      </div>
    </section>
  </div>
</template>
