<template>
  <div class="row">
    <div class="col-12" v-for="p in Posts" :key="p.id">
      <div class="card m-1 elevation-2">
        <div class="card-title px-3 pt-3">
          <div class="d-flex justify-content-between">
            <h5>
              <img
                class="rounded-circle rounded"
                :src="p.creator.picture"
                alt=""
              />
              -
              {{ p.creator.name }}
            </h5>
            <i
              class="mdi mdi-dump-truck btn text-red"
              @click="Delete"
              v-if="p.creatorId === Account.id"
            />
            <span v-if="p.creatorId !== Account.id" d-flex>
              <i class="mdi mdi-cards-heart btn" />
            </span>
          </div>
        </div>
        <div class="card-body px-4 pb-4">
          <h8>{{ p.body }}</h8>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { onMounted } from "@vue/runtime-core";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
export default {
  setup() {
    onMounted(async () => {
      postsService.getAll();
    });
    return {
      async Delete() {
        try {
          logger.log("hello");
        } catch (error) {
          logger.error(error);
        }
      },
      Account: computed(() => AppState.account),
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
.smol {
  text-align: center;
  width: 25px;
  height: 25px;
}
.text-red {
  color: red;
}
</style>