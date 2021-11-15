<template>
  <div class="row my-2" v-if="user.isAuthenticated">
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
                  v-model="state.editable.body"
                  type="text"
                  class="form-text tingy"
                  placeholder="What would you like to say? ..."
                  required
                />
              </div>
              <div class="col-2"></div>
            </div>
            <div class="row py-3">
              <div class="col-1">
                <label class="form-label">Image</label>
              </div>
              <div class="col-9">
                <input
                  type="text"
                  v-model="state.editable.imgUrl"
                  class="form-text tingy"
                  placeholder="link for any images if you wish ..."
                />
              </div>
              <div class="col-2 mt-4">
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
import { AuthService } from "../services/AuthService";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { postsService } from "../services/PostsService";
export default {
  setup() {
    const state = reactive({ editable: {} });
    return {
      state,
      async createPost() {
        try {
          state.editable.creatorId = this.Account.id;
          logger.log(state.editable);
          await postsService.createPost(state.editable);
          state.editable = {};
        } catch (error) {
          logger.error(error);
        }
      },
      user: computed(() => AppState.user),
      Account: computed(() => AppState.account),
    };
  },
};
</script>
<style scoped>
.tingy {
  width: 100%;
}
</style>
