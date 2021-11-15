<template>
  <div class="container-fluid">
    <div class="row py-3">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="card elevation-2 mt-2">
          <div class="card-title p-3">
            <div class="row">
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <img
                    class="rounded-circle rounded"
                    :src="Profile.picture"
                    alt="Profile Picture"
                  />
                  <h1 class="px-3">- {{ Profile.name }}</h1>
                  <i
                    class="mdi mdi-account-cowboy-hat"
                    v-if="Profile.graduated"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex justify-content-end align-items-center">
                  <h5 class="px-2">
                    <b> Email: </b>
                  </h5>
                  <h4 class="px-3">
                    {{ Profile.email }}
                  </h4>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-3"></div>
              <div class="col-3">
                <div class="d-flex">
                  <h5 v-if="Profile.github" class="px-3">
                    <a title="link to their Github" :href="Profile.github"
                      >Github</a
                    >
                  </h5>
                  <h5 v-if="Profile.linkedin" class="px-3">
                    <a
                      title="link to this user's Linkedin page"
                      :href="Profile.linkedin"
                    >
                      Linkedin
                    </a>
                  </h5>
                </div>
              </div>
              <div class="col-1"></div>
              <div class="col-4">
                <div class="d-flex align-items-center">
                  <h6><b>Class:</b></h6>
                  <h5 class="px-3" v-if="Profile.class">{{ Profile.class }}</h5>
                  <h5 v-else class="px-3">not yet assigned</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h6><b>bio:</b></h6>
            <p v-if="Profile.bio">{{ Profile.bio }}</p>
            <p v-else>not yet added or created</p>
            <h6><b>Resume:</b></h6>
            <p v-if="Profile.resume">{{ Profile.resume }}</p>
            <p v-else>not yet created or added</p>
            <div
              class="d-flex justify-content-end"
              v-if="Profile.id === Account.id"
            >
              <button
                class="btn btn-outline-success"
                data-bs-target="profile-modal"
                data-bs-toggle="modal"
              >
                edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { profileService } from "../services/ProfileService";
import { Modal } from "bootstrap";
export default {
  setup() {
    return {
      // async editProfile() {
      //   const modalElem = Modal.getOrCreateInstance(
      //     document.getElementById("profile-modal")
      //   );
      //   logger.log(modalElem);
      //   modalElem.show();
      // },
      Profile: computed(() => AppState.profile),
      Account: computed(() => AppState.account),
    };
  },
};
</script>
<style scoped>
.rounded {
  height: 100px;
  width: 100px;
}
</style>