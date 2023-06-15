<template>
  <spinner v-if="loading" class="spinner-center" />
  <section v-if="!loading && posts.length > 0">
    <post-item v-for="item in posts" :key="item?.id" :post="item" />
  </section>
</template>

<script setup lang="ts">
import { Post } from "~/store/postStore";

defineProps<{
  posts: Post[];
  loading: boolean;
}>();
</script>

<style lang="scss" scoped>
.spinner-center {
  text-align: center;
  margin-top: 250px;
}
</style>
