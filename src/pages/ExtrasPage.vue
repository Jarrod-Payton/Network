<template>
  <div class="row">
    <div class="col-3 text-center mt-2">
      <router-link :to="{ name: 'Extras2' }">
        <button class="btn btn-outline-danger p-3">
          Back to the page you silly goose
        </button>
      </router-link>
    </div>
    <div class="col-6">
      <h1 class="text-center">Really?</h1>
      <img class="dixon" src="Dixon.jpg" alt="" />
      <h1 class="text-center">Bottom Text</h1>
    </div>
    <div class="col-3"></div>
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style scoped>
.dixon {
  height: 100vh;
}
</style>
