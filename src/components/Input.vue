<template>
  <div>
    <input
      v-model="currentURL"
      type="text"
      class="form-control form-control-lg"
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
        class="btn btn-lg btn-success mt-3 mx-auto"
        @click="downloadVideo"
        :disabled="!isValidURL"
      >
        <span class="h1">Download Video</span>
        <i class="align-baseline fa fa-download fa-lg ml-3"></i>
      </button>
      <br />
      <button
        class="btn btn-primary mt-3"
        @click="downloadAudio"
        :disabled="!isValidURL"
      >
        Download Audio
        <i class="align-baseline fa fa-music ml-1"></i>
      </button>
    </div>
  </div>
</template>
<script>
import validUrl from "valid-url";
import { downloadVideo, downloadAudio } from "../requests";

export default {
  data: () => ({
    currentURL: "",
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