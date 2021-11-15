<template>
  <div class="row">
    <div class="col-12" v-for="p in Posts" :key="p.id">
      <div class="card m-2 elevation-2">
        <div class="card-title px-3 pt-3">
          <div class="d-flex justify-content-between">
            <h5 @click="routeTo(p.creatorId)" class="selectable">
              <img
                class="rounded-circle rounded"
                :src="p.creator.picture"
                alt=""
              />
              -
              {{ p.creator.name }}
            </h5>
            <div class="text-center">
              <span v-if="p.creatorId !== Account.id">
                <i
                  class="mdi mdi-cards-heart btn"
                  v-if="user.isAuthenticated"
                  @click="likePost(p)"
                />
              </span>
              <i
                class="mdi mdi-dump-truck btn text-red"
                @click="Delete(p.id)"
                v-if="p.creatorId === Account.id"
              />
              <h6 v-if="p.creatorId === Account.id">likes received</h6>
              <h6>{{ p.likes.length }}</h6>
            </div>
          </div>
        </div>
        <div class="card-body px-4 pb-4">
          <h4>{{ p.body }}</h4>
          <img :src="p.imgUrl" alt="image" v-if="p.imgUrl" class="pimg p-2" />
          <h6>{{ p.creator.createdAt }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState";
import { onMounted } from "@vue/runtime-core";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { router } from "../router";
export default {
  setup() {
    return {
      routeTo(id) {
        router.push({
          name: "Profile",
          params: { id: id },
        });
      },
      async likePost(post) {
        try {
          postsService.likePost(post);
        } catch (error) {
          logger.error(error);
        }
      },
      async Delete(postId) {
        if (window.confirm("Are you sure you want to delte this?")) {
          try {
            postsService.deletePost(postId);
          } catch (error) {
            logger.error(error);
          }
        } else {
          return;
        }
      },
      user: computed(() => AppState.user),
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
.pimg {
  justify-content: flex-end;
  max-height: 100%;
  max-width: 100%;
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