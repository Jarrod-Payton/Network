<template>
  <div class="row mt-2 p-2">
    <div class="col-md-3"></div>
    <div class="col-md-6 text-center">
      <form @submit.prevent="search" class="input-group elevation-2">
        <!-- NOTE keypress submits on each keypress, ideally you don't want both of these on your search bar but can be helpful -->
        <input
          @submit="search"
          v-model="searchText"
          class="form-control"
          placeholder="search title of posts"
          type="text"
        />
        <button class="btn btn-outline-primary">search</button>
      </form>
    </div>
    <div class="col-md-3"></div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
import { logger } from "../utils/Logger";
import { postsService } from "../services/PostsService";
export default {
  setup() {
    const searchText = ref("");
    return {
      searchText,
      async search() {
        try {
          await postsService.getAll("?body=" + searchText.value);
          searchText.value = "";
        } catch (error) {
          logger.error(error);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>