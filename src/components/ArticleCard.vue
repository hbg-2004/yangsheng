<script setup lang="ts">
import type { Article } from '@/data/articles'
import { Calendar, Clock, User } from 'lucide-vue-next'

defineProps<{
  article: Article
}>()
</script>

<template>
  <RouterLink
    :to="`/article/${article.id}`"
    class="card overflow-hidden group cursor-pointer"
  >
    <div class="relative h-48 overflow-hidden">
      <img
        :src="article.coverImage"
        :alt="article.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div class="absolute bottom-4 left-4 flex gap-2">
        <span
          v-for="tag in article.tags.slice(0, 2)"
          :key="tag"
          class="bg-white/90 text-dark text-xs px-2 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="p-5">
      <h3 class="font-serif text-lg font-semibold text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
        {{ article.title }}
      </h3>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">
        {{ article.summary }}
      </p>
      <div class="flex items-center justify-between text-xs text-gray-500">
        <div class="flex items-center gap-1">
          <User class="w-4 h-4" />
          <span>{{ article.author }}</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1">
            <Calendar class="w-4 h-4" />
            <span>{{ article.publishDate }}</span>
          </div>
          <div class="flex items-center gap-1">
            <Clock class="w-4 h-4" />
            <span>{{ article.readTime }}分钟</span>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
