<template>
  <div class="row my-2">
    <div class="col-12">
      <div class="card elevation-2">
        <div class="card-title p-3">
          <h4><b> Create Post </b></h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="createPost">
            <div class="row">
              <div class="col-1">
                <label class="form-label">Post</label>
              </div>
              <div class="col-9">
                <input
                  v-model="state.editable.title"
                  type="text"
                  class="form-text tingy"
                />
              </div>
              <div class="col-2">
                <button class="btn btn-outline-success">Create</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive, ref } from "@vue/reactivity";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { createPostsService } from "../services/CreatePostsService";
export default {
  setup() {
    const state = reactive({ editable: {} });
    return {
      state,
      async createPost(state) {
        try {
          await createPostsService.createPost(state.editable);
          state.editable = {};
        } catch (error) {
          logger.error(error);
        }
      },
    };
  },
};
</script>
<style scoped>
.tingy {
  width: 100%;
}
</style>
