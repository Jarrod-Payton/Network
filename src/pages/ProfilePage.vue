<template>
  <div class="container">
    <ProfileHeader />
    <Posts />
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import Pop from "../utils/Pop";
import { profileService } from "../services/ProfileService";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      try {
        await profileService.getProfile(route.params.id);
        await profileService.getPosts(route.params.id);
      } catch (error) {
        Pop.error(error);
      }
    });
    return {};
  },
};
</script>
