<template>
  <div class="row my-2">
    <div class="col-12">
      <div class="card">
        <div class="card-title p-3">
          <h4><b> Create Post </b></h4>
        </div>
        <div class="card-body"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { createPostsService } from "../services/CreatePostsService";
export default {
  setup() {
    const createBody = ref("");
    return {
      createBody,
      async createPost() {
        try {
          createPostsService.CreatePost();
        } catch (error) {
          logger.error(error);
        }
      },
    };
  },
};
</script>
