<script setup lang="ts">
import type { Category } from '@/data/categories'
import { Flame, Moon, Brain, Pill, Heart, Briefcase } from 'lucide-vue-next'

defineProps<{
  category: Category
}>()

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
  <RouterLink
    :to="`/category/${category.slug}`"
    class="card p-6 group cursor-pointer"
  >
    <div
      :class="`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`"
    >
      <component :is="iconMap[category.icon]" class="w-7 h-7 text-white" />
    </div>
    <h3 class="text-xl font-serif font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
      {{ category.name }}
    </h3>
    <p class="text-gray-600 text-sm leading-relaxed">
      {{ category.description }}
    </p>
  </RouterLink>
</template>
