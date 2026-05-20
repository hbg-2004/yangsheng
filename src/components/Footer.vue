<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-dark text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">养</span>
            </div>
            <span class="font-serif text-2xl font-bold">养生生活</span>
          </div>
          <p class="text-gray-400 mb-4 max-w-md">
            专业的健康生活方式平台，提供减脂、睡眠改善、冥想、补剂选择等科学健康内容，帮助你迈向更健康的生活。
          </p>
          <p class="text-gray-500 text-sm">
            免责声明：本网站内容仅供参考，不构成医疗建议。如有健康问题，请咨询专业医生。
          </p>
        </div>

        <div>
          <h3 class="font-semibold mb-4 text-lg">内容分类</h3>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/category/fat-loss" class="text-gray-400 hover:text-primary transition-colors">
                减脂
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/category/sleep" class="text-gray-400 hover:text-primary transition-colors">
                睡眠改善
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/category/meditation" class="text-gray-400 hover:text-primary transition-colors">
                冥想
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/category/supplements" class="text-gray-400 hover:text-primary transition-colors">
                补剂
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/category/elderly" class="text-gray-400 hover:text-primary transition-colors">
                中老年健康
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/category/workplace" class="text-gray-400 hover:text-primary transition-colors">
                职场减压
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4 text-lg">联系我们</h3>
          <ul class="space-y-2 text-gray-400">
            <li>商务合作：business@example.com</li>
            <li>咨询邮箱：info@example.com</li>
            <li>微信公众号：养生生活</li>
          </ul>
          <div class="mt-4">
            <RouterLink to="/about" class="text-primary hover:text-primary-light transition-colors">
              关于我们 &rarr;
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
        <p>&copy; 2026 养生生活. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
