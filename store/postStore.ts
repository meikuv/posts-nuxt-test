import { defineStore } from "pinia";
import { PostService } from "~/services/post.service";

export interface Post {
  id: number;
  title: string;
  description: string;
  updatedAt: Date;
  image: string;
  likeCount: number;
  likeChecked: boolean;
}

export const usePostStore = defineStore("postStore", {
  state: () => ({
    posts: [] as Post[],
    post: {} as Post,
    error: [],
    loading: false,
  }),
  getters: {
    getPosts(state): Post[] {
      return state.posts;
    },
    getPost(state): Post {
      return state.post;
    },
    getByTitle: (state) => (title: string) => {
      return state.posts.find(
        (item: { title: string }) => item.title === title
      );
    },
    getLoading(state): boolean {
      return state.loading;
    },
  },
  actions: {
    async fetchPosts(): Promise<void> {
      this.posts = [];
      this.loading = true;
      await setTimeout(() => {
        PostService.getPosts().then((data: any) => {
          this.posts = data;
          this.loading = false;
          console.log(this.posts);
        });
      }, 1000);
    },
    async getPostById(id: number): Promise<void> {
      this.loading = true;
      await setTimeout(() => {
        PostService.getById(id).then((data: any) => {
          this.post = data;
          console.log(this.post)
          this.loading = false;
        });
      }, 1000);
    },
    encrimentLike(id: number) {
      this.posts = this.posts.map((post) =>
        post.id === id
          ? { ...post, likeCount: post.likeCount + 1, likeChecked: true }
          : post
      );
    },
  },
});
