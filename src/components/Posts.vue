<template>
  <div class="row">
    <div class="col-12" v-for="p in Posts" :key="p.id">
      <div class="card m-1">
        <div class="card-title p-2">
          <h5>
            {{ p.creator.name }}
            -
            <img
              class="rounded-circle rounded"
              :src="p.creator.coverImg"
              alt=""
            />
          </h5>
        </div>
        <div class="card-body p-5">{{ p.body }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { onMounted } from "@vue/runtime-core";
import { postsService } from "../services/PostsService";
export default {
  setup() {
    onMounted(async () => {
      postsService.getAll();
    });
    return {
      Posts: computed(() => AppState.posts.posts),
    };
  },
};
</script>
<style scoped>
.rounded {
  height: 50px;
  width: 50px;
}
</style>