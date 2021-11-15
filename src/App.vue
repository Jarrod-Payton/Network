<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <Modal id="profile-modal" />
  </footer>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>

//TODO Ask about refreshing the get all when we add a like or delete or create
//TODO ask how to read the timestamps on posts
//TODO ask about Modal
//TODO ask about pop.confirm