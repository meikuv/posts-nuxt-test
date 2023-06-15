<template>
  <div class="card bg-light-subtle mt-4">
    <img :src="post?.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <div class="text-section">
        <h5 class="card-title fw-bold">{{ post?.title }}</h5>
        <p class="card-text">
          {{ post?.description }}
        </p>
        <p class="card-text">
          <NuxtLink :to="{ name: 'post-id', params: { id: post.id } }">
            Continue reading...
          </NuxtLink>
        </p>
      </div>
      <div class="cta-section">
        <p class="card-text">
          <small class="text-muted">
            Created at {{ formatDate(post?.updatedAt) }}
          </small>
        </p>
        <button
          class="btn border-0"
          type="button"
          @click="handleClick(post?.id)"
        >
          <IconsHandLike :class="{ liked: post.likeChecked }" />
          {{ post?.likeCount }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from "~/utils/format-date";
import { Post, usePostStore } from "~/store/postStore";

defineProps<{
  post: Post;
}>();
const postStore = usePostStore();

const handleClick = (id: number) => {
  postStore.encrimentLike(id);
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 75%;
  flex-direction: row;
  background-color: #696969;
  border: 0;
  box-shadow: 0 7px 7px rgba(0, 0, 0, 0.18);
  margin: 3em auto;
}
.card.dark {
  color: #fff;
}
.card.card.bg-light-subtle .card-title {
  color: dimgrey;
}

.card img {
  max-width: 25%;
  max-height: 180px;
  padding: 0.5em;
  border-radius: 0.7em;
}
.card-body {
  display: flex;
  justify-content: space-between;
}
.text-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 60%;
}
.cta-section {
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}
button {
  cursor: pointer;
}
.liked {
  color: #ee3529;
}
@media screen and (max-width: 810px) {
  .card {
    font-size: 0.9em;
    flex-direction: column;
  }
  .card img {
    max-width: 100%;
    max-height: 180px;
    padding: 0.5em;
    border-radius: 0.7em;
  }
}
</style>
