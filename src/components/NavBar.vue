<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">养</span>
            </div>
            <span class="font-serif text-2xl font-bold text-dark">养生生活</span>
          </RouterLink>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <RouterLink to="/" class="text-gray-600 hover:text-primary transition-colors">首页</RouterLink>
          <RouterLink to="/category/fat-loss" class="text-gray-600 hover:text-primary transition-colors">减脂</RouterLink>
          <RouterLink to="/category/sleep" class="text-gray-600 hover:text-primary transition-colors">睡眠改善</RouterLink>
          <RouterLink to="/category/meditation" class="text-gray-600 hover:text-primary transition-colors">冥想</RouterLink>
          <RouterLink to="/about" class="text-gray-600 hover:text-primary transition-colors">关于我们</RouterLink>
        </div>

        <button
          @click="toggleMenu"
          class="md:hidden p-2 text-gray-600 hover:text-primary"
        >
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden bg-white border-t">
      <div class="px-4 py-3 space-y-2">
        <RouterLink
          to="/"
          @click="toggleMenu"
          class="block px-3 py-2 text-gray-600 hover:text-primary"
        >首页</RouterLink>
        <RouterLink
          to="/category/fat-loss"
          @click="toggleMenu"
          class="block px-3 py-2 text-gray-600 hover:text-primary"
        >减脂</RouterLink>
        <RouterLink
          to="/category/sleep"
          @click="toggleMenu"
          class="block px-3 py-2 text-gray-600 hover:text-primary"
        >睡眠改善</RouterLink>
        <RouterLink
          to="/category/meditation"
          @click="toggleMenu"
          class="block px-3 py-2 text-gray-600 hover:text-primary"
        >冥想</RouterLink>
        <RouterLink
          to="/about"
          @click="toggleMenu"
          class="block px-3 py-2 text-gray-600 hover:text-primary"
        >关于我们</RouterLink>
      </div>
    </div>
  </nav>
</template>
