<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import { articles } from '@/data/articles'

const route = useRoute()
const articleId = computed(() => route.params.id as string)

const currentArticle = computed(() => {
  return articles.find(a => a.id === articleId.value)
})

const relatedArticles = computed(() => {
  if (!currentArticle.value) return []
  return articles
    .filter(a => a.category === currentArticle.value!.category && a.id !== currentArticle.value!.id)
    .slice(0, 3)
})

const formattedContent = computed(() => {
  if (!currentArticle.value) return ''
  return currentArticle.value.content.trim()
})
</script>

<template>
  <div class="min-h-screen bg-gray-50" v-if="currentArticle">
    <!-- Article Header -->
    <section class="relative h-96 overflow-hidden">
      <img
        :src="currentArticle.coverImage"
        :alt="currentArticle.title"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div class="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
          返回首页
        </RouterLink>
        <div class="flex gap-2 mb-4">
          <span
            v-for="tag in currentArticle.tags"
            :key="tag"
            class="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full"
          >
            {{ tag }}
          </span>
        </div>
        <h1 class="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
          {{ currentArticle.title }}
        </h1>
        <div class="flex flex-wrap items-center gap-4 text-white/80 text-sm">
          <div class="flex items-center gap-2">
            <User class="w-4 h-4" />
            <span>{{ currentArticle.author }}</span>
          </div>
          <div class="flex items-center gap-2">
            <Calendar class="w-4 h-4" />
            <span>{{ currentArticle.publishDate }}</span>
          </div>
          <div class="flex items-center gap-2">
            <Clock class="w-4 h-4" />
            <span>{{ currentArticle.readTime }} 分钟阅读</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <article class="bg-white rounded-xl shadow-sm p-8 md:p-12">
              <div class="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-dark prose-p:text-gray-700 prose-a:text-primary prose-strong:text-dark">
                <div v-html="formattedContent.replace(/\n/g, '<br>').replace(/#{1,6}\s(.+)/g, (match, p1, offset) => {
                  const level = match.match(/^(#{1,6})\s/)[1].length
                  return `<h${level}>${p1}</h${level}>`
                }).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/-(.+)/g, '<li>$1</li>')"></div>
              </div>

              <div class="mt-12 pt-8 border-t border-gray-200">
                <p class="text-sm text-gray-500 italic">
                  免责声明：本网站内容仅供参考，不构成医疗建议。在实施任何健康计划或购买补剂前，请咨询专业医生或健康顾问。
                </p>
              </div>
            </article>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <!-- Product Recommendations -->
            <div v-if="currentArticle.products && currentArticle.products.length > 0" class="mb-8">
              <h3 class="font-serif text-2xl font-bold text-dark mb-6">相关产品推荐</h3>
              <div class="space-y-4">
                <ProductCard
                  v-for="product in currentArticle.products"
                  :key="product.id"
                  :product="product"
                />
              </div>
            </div>

            <!-- Related Articles -->
            <div v-if="relatedArticles.length > 0">
              <h3 class="font-serif text-2xl font-bold text-dark mb-6">相关推荐</h3>
              <div class="space-y-4">
                <ArticleCard
                  v-for="article in relatedArticles"
                  :key="article.id"
                  :article="article"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
