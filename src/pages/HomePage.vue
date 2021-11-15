<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <Search />
        <CreatePost />
        <Posts />
      </div>
      <div class="col-4">
        <Extra />
        <Extra />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { postsService } from "../services/PostsService";
export default {
  setup() {
    onMounted(async () => {
      postsService.getAll();
    });
    return {};
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
