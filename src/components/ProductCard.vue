<script setup lang="ts">
import type { Product } from '@/data/products'
import { ExternalLink } from 'lucide-vue-next'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
    <div class="relative h-40 overflow-hidden">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="p-4">
      <h4 class="font-semibold text-dark mb-2 line-clamp-1">
        {{ product.name }}
      </h4>
      <p class="text-gray-600 text-sm mb-3 line-clamp-2">
        {{ product.description }}
      </p>
      <div class="flex items-center justify-between">
        <span class="text-2xl font-bold text-primary">
          ¥{{ product.price }}
        </span>
        <a
          :href="product.affiliateUrl"
          target="_blank"
          rel="sponsored noopener"
          class="btn-primary text-sm py-2 px-4 inline-flex items-center gap-2"
        >
          查看详情
          <ExternalLink class="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</template>
