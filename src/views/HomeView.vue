<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import CategoryCard from '@/components/CategoryCard.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import { categories } from '@/data/categories'
import { articles } from '@/data/articles'

const featuredArticles = articles.slice(0, 3)
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary via-primary-dark to-teal-700 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div class="text-center">
          <h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            开启你的
            <span class="text-accent">健康生活</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            专业的健康生活方式指南，帮助你实现减脂、改善睡眠、正念冥想，
            <br class="hidden md:block" />
            迈向更健康、更平衡的人生。
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/category/fat-loss" class="btn-primary inline-flex items-center gap-2 justify-center">
              开始探索
              <ArrowRight class="w-5 h-5" />
            </RouterLink>
            <RouterLink to="/about" class="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2 justify-center">
              了解更多
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>

    <!-- Categories Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="font-serif text-4xl font-bold text-dark mb-4">六大健康主题</h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            涵盖减脂、睡眠、冥想、补剂、中老年健康和职场减压，全方位守护你的身心健康
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard
            v-for="category in categories"
            :key="category.slug"
            :category="category"
          />
        </div>
      </div>
    </section>

    <!-- Featured Articles Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-12">
          <div>
            <h2 class="font-serif text-4xl font-bold text-dark mb-2">精选文章</h2>
            <p class="text-gray-600">阅读专业、实用的健康知识</p>
          </div>
          <RouterLink
            to="/category/fat-loss"
            class="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
          >
            查看更多
            <ArrowRight class="w-5 h-5" />
          </RouterLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard
            v-for="article in featuredArticles"
            :key="article.id"
            :article="article"
          />
        </div>
        <div class="text-center mt-8 md:hidden">
          <RouterLink
            to="/category/fat-loss"
            class="btn-secondary inline-flex items-center gap-2"
          >
            查看更多文章
            <ArrowRight class="w-5 h-5" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="py-16 bg-gradient-to-br from-primary/5 to-primary-light/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="font-serif text-4xl font-bold text-dark mb-4">为什么选择我们</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">📚</span>
            </div>
            <h3 class="font-serif text-xl font-semibold text-dark mb-2">专业内容</h3>
            <p class="text-gray-600">由专业健康管理师、营养师和心理咨询师撰写，确保内容的科学性和可靠性</p>
          </div>
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">🎯</span>
            </div>
            <h3 class="font-serif text-xl font-semibold text-dark mb-2">实用指南</h3>
            <p class="text-gray-600">提供可操作的建议和方案，帮助你立即开始改变生活方式</p>
          </div>
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">💡</span>
            </div>
            <h3 class="font-serif text-xl font-semibold text-dark mb-2">产品推荐</h3>
            <p class="text-gray-600">精选优质健康产品，提供详细评测和购买建议，让你做出明智选择</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          准备好开始你的健康之旅了吗？
        </h2>
        <p class="text-white/90 text-lg mb-8">
          立即浏览我们的文章，获取专业的健康指导
        </p>
        <RouterLink to="/category/meditation" class="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
          开始冥想
          <ArrowRight class="w-5 h-5" />
        </RouterLink>
      </div>
    </section>
  </div>
</template>
