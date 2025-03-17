<template>
  <div class="mt-10">
    <h2 id="blog" class="text-[#FFD369] font-roboto font-bold text-xl">//Lasts posts</h2>
    <div v-for="(post, index) in blogData" :key="index" class="mb-4">
      
        <h3 class="font-roboto font-bold">{{ post.Title }}</h3>
        <span class="text-[#FFECBD] font-roboto">April 29, 2024</span>
        <p class="[display:ruby]">Hello, dolor sit amet consectetur. Nisi elementum venenatis sed feugiat adipiscing egestas vivamus consectetur. Curabitur massa feugiat est sed aenean nec.
        Hello, dolor sit amet consectetur.<IconsReadmore class="-mt-1"/></p>
  
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blogData: {
    type: Array,
    default: () => []
  }
});
</script>
