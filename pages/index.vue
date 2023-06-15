<template>
  <div class="main-container">
    <Search v-model:model-value="search" style="margin: auto" />
    <post-list :posts="filterPosts" :loading="getLoading" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Post, usePostStore } from "~/store/postStore";

const search = ref<string>("");
const postStore = usePostStore();
const { getLoading } = storeToRefs(usePostStore());

const filterByTitle = (posts: Post[]) => {
  return search.value
    ? posts.filter((post: any) =>
        post.title.toLowerCase().includes(search.value.toLowerCase())
      )
    : posts;
};

const filterPosts = computed(() => {
  return filterByTitle(postStore.$state.posts);
});

onMounted(async () => {
  postStore.fetchPosts();
});
</script>

<style lang="scss" scoped>
.main-container {
  width: 1350px;
  margin: 0 auto;
}
</style>
