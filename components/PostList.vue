<template>
  <spinner v-if="loading" style="position: absolute; top: 50%; left: 47%" />
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
