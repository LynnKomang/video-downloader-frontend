<template>
  <div>
    <p class="h3 mb-3">Enter your URL here</p>
    <input
      v-model="currentURL"
      type="text"
      class="form-control form-control-lg shadow rounded-pill"
      placeholder="Video URL"
    />
    <p
      :style="{ visibility: !isValidURL ? 'visible' : 'hidden' }"
      class="form-text text-muted text-left"
    >
      The URL you entered is invalid
    </p>
    <div class="text-center">
      <button
        class="animated-button btn btn-lg btn-success mt-3 mx-auto shadow"
        @click="downloadVideo"
        :disabled="!isValidURL"
      >
        <span class="h1">Download Video</span>
        <i class="align-baseline fa fa-download fa-lg ml-3"></i>
      </button>
      <br />
      <button
        class="animated-button btn btn-primary mt-3 shadow"
        @click="downloadAudio"
        :disabled="!isValidURL"
      >
        Download Audio
        <i class="align-baseline fa fa-music ml-1"></i>
      </button>
    </div>

    <button
      class="btn btn-outline-secondary btn-sm mb-4 mt-5"
      type="button"
      data-toggle="collapse"
      data-target="#advancedOptions"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      Advanced options
      <i class="align-baseline fa fa-cog"></i>
    </button>
    <div class="collapse" id="advancedOptions">
      <div class="card card-body">
        <div class="custom-control custom-checkbox">
          <input
            v-model="embedThumbnail"
            type="checkbox"
            class="custom-control-input"
            id="embedThumbnail"
          />
          <label class="custom-control-label" for="embedThumbnail"
            >Embed thumbnail</label
          >
        </div>

        <div class="custom-control custom-checkbox">
          <input
            v-model="removeExtention"
            type="checkbox"
            class="custom-control-input"
            id="removeExtention"
          />
          <label class="custom-control-label" for="removeExtention"
            >Remove extention</label
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import validUrl from "valid-url";
import { downloadVideo, downloadAudio } from "../requests";

export default {
  data: () => ({
    currentURL: "",
    embedThumbnail: false,
    removeExtention: false,
  }),
  computed: {
    isValidURL() {
      return validUrl.isUri(this.currentURL);
    },
  },
  methods: {
    downloadVideo() {
      downloadVideo(this.currentURL);
    },
    downloadAudio() {
      downloadAudio(this.currentURL);
    },
  },
};
</script>
<style>
.animated-button:enabled:hover,
.animated-button:enabled:focus {
  -webkit-animation: pulse 1s;
  animation: pulse 1s;
}
</style>