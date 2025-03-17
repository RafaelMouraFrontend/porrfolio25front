<template>
  <div>
    <ContentAbout/>
    <ContentExpertiese class="mt-16"/>
    <ContentBlog class="mt-16" :blog-data="posts.data"/>
  </div>
</template>


<script setup>
const { find } = useStrapi();

const { data: posts, error } = await useAsyncData(
  'posts',
  () => find('posts', { 
    sort: ['createdAt:desc']
  })
);

</script>