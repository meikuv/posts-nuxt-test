<template>
  <spinner v-if="getLoading" class="spinner-center" />
  <div class="blog-single gray-bg" v-else>
    <div class="container">
      <div class="row align-items-start">
        <div class="col-lg-8 m-15px-tb">
          <article class="article">
            <div class="article-img">
              <img
                :src="getPost.image"
                style="width: 825px; height: 350px; border-radius: 5px"
              />
            </div>
            <div class="article-title">
              <h2>{{ getPost.title }}</h2>
              <div class="media">
                <div class="media-body">
                  <span>Created at {{ formatDate(getPost.updatedAt) }}</span>
                </div>
              </div>
            </div>
            <div class="article-content">
              <p>
                {{ getPost.description }}
              </p>
            </div>
          </article>
        </div>
        <div class="col-lg-4 m-15px-tb blog-aside">
          <div class="widget widget-latest-post">
            <div class="widget-title">
              <h3>Latest Post</h3>
            </div>
            <div
              class="widget-body"
              v-for="post in getPosts.slice(0, 4)"
              :key="post?.id"
            >
              <div class="latest-post-aside media">
                <div class="lpa-left media-body">
                  <div class="lpa-title">
                    <h5>
                      <a href="#">{{ post?.title }}</a>
                    </h5>
                  </div>
                  <div class="lpa-meta">
                    <a class="date" href="#">{{
                      formatDate(post?.updatedAt)
                    }}</a>
                  </div>
                </div>
                <p style="font-size: 10px">{{ post?.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from "~/store/postStore";
import { storeToRefs } from "pinia";

const route: any = useRoute();
const postStore = usePostStore();
const { getPost, getLoading, getPosts } = storeToRefs(usePostStore());

onMounted(async () => {
  await postStore.fetchPosts();
  await postStore.getPostById(Number(route.params.id));
});
</script>

<style lang="scss" scoped>
body {
  margin-top: 20px;
}
.spinner-center {
  text-align: center;
  margin-top: 250px;
}
.blog-aside .widget {
  box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
  border-radius: 5px;
  overflow: hidden;
  background: #ffffff;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  display: inline-block;
  vertical-align: top;
}
.blog-aside .widget-body {
  padding: 15px;
  border-bottom: 1px solid #eee;
}
.blog-aside .widget-title {
  padding: 15px;
  border-bottom: 1px solid #eee;
}
.blog-aside .widget-title h3 {
  font-size: 20px;
  font-weight: 700;
  color: #fc5356;
  margin: 0;
}
.blog-aside .media {
  margin-bottom: 15px;
}
.blog-aside p {
  font-size: 16px;
  margin: 0;
}
.blog-aside h6 {
  font-weight: 600;
  color: #20247b;
  font-size: 22px;
  margin: 0;
  padding-left: 20px;
}
.blog-aside .post-aside .post-aside-meta a {
  color: #6f8ba4;
  font-size: 12px;
  text-transform: uppercase;
  display: inline-block;
  margin-right: 10px;
}
.blog-aside .latest-post-aside + .latest-post-aside {
  border-top: 1px solid #eee;
  padding-top: 15px;
  margin-top: 15px;
}
.blog-aside .latest-post-aside .lpa-left {
  padding-right: 15px;
}
.blog-aside .latest-post-aside .lpa-title h5 {
  margin: 0;
  font-size: 15px;
}
.blog-aside .latest-post-aside .lpa-title a {
  color: #20247b;
  font-weight: 600;
}
.blog-aside .latest-post-aside .lpa-meta a {
  color: #6f8ba4;
  font-size: 12px;
  text-transform: uppercase;
  display: inline-block;
  margin-right: 10px;
}
.blog-single {
  padding-top: 30px;
  padding-bottom: 30px;
}

.article {
  box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
  border-radius: 5px;
  overflow: hidden;
  background: #ffffff;
  padding: 15px;
  margin: 15px 0 30px;
}
.article .article-title {
  padding: 15px 0 20px;
}
.article .article-title h6 {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 20px;
}
.article .article-title h6 a {
  text-transform: uppercase;
  color: #fc5356;
  border-bottom: 1px solid #fc5356;
}
.article .article-title h2 {
  color: #20247b;
  font-weight: 600;
}
.article .article-title .media {
  padding-top: 15px;
  border-bottom: 1px dashed #ddd;
  padding-bottom: 20px;
}
.article .article-content h1,
.article .article-content h2,
.article .article-content h3,
.article .article-content h4,
.article .article-content h5,
.article .article-content h6 {
  color: #20247b;
  font-weight: 600;
  margin-bottom: 15px;
}
.article .article-content blockquote {
  max-width: 600px;
  padding: 15px 0 30px 0;
  margin: 0;
}
.article .article-content blockquote p {
  font-size: 20px;
  font-weight: 500;
  color: #fc5356;
  margin: 0;
}
img {
  max-width: 100%;
}
img {
  vertical-align: middle;
  border-style: none;
}
</style>
