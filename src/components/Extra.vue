<template>
  <div class="row">
    <div class="col-12 mt-3" v-for="e in Extras" :key="e">
      <router-link :to="{ name: 'Extras' }">
        <img class="selectable" :src="e.tall" alt="Extras Page" />
      </router-link>
    </div>
  </div>
</template>
<script>
import { computed, onMounted } from "@vue/runtime-core";
import { extrasService } from "../services/ExtrasService";
import { AppState } from "../AppState";
export default {
  setup() {
    onMounted(async () => {
      extrasService.getExtras();
    });
    return {
      Extras: computed(() => AppState.extras),
    };
  },
};
</script>