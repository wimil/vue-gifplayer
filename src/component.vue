<template>
  <div class="gif-player">
    <video
      :loop="loop"
      muted
      playsinline
      ref="player"
      @play="onPlay"
      @pause="onPause"
      @canplay="onCanPlay"
      @waiting="onWaiting"
      @loadeddata="onLoad"
      :poster="still"
      :width="width"
      :height="height"
    >
      <source :src="src" type="video/mp4" v-if="type === 'video'" />
    </video>
    <div v-if="loaded">
      <div class="YnXDvQvpM OOKpgQoKM" v-if="!playing"></div>
      <div :class="'gGVvBwZGQ OOKpgQoKM ' + loadingClass" @click="onToggle">
        <div class="zqxOjvMAN" v-if="!playing">
          <div class="btn-play">
            <span class="btn-play-text"></span>
          </div>
        </div>
      </div>

      <div v-if="showBy">
        <a
          :href="defaultBy.url"
          target="_blank"
          class="vmDOAnrkZ"
          v-if="!playing"
        >
          <span class="BxKNmZlVJ">{{ defaultBy.name }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="22"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
//https://storage.googleapis.com/kasian.appspot.com/720_BlackDog_2.mp4
//https://video.twimg.com/tweet_video/EMEViN7WoAES7hS.mp4
export default {
  name: "gif-player",
  props: {
    src: {
      type: String
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "video"
    },
    still: {
      type: String
    },
    by: Object,
    showBy: {
      type: Boolean,
      default: true
    },
    width: [Number, String],
    height: [Number, String]
  },
  data() {
    return {
      player: null,
      playing: false,
      loading: false,
      loadingClass: "",
      loaded: false,
      defaultBy: {
        name: "Giphy",
        url: this.src
      }
    };
  },
  methods: {
    play() {
      this.player.play();
    },
    pause() {
      this.player.pause();
    },
    onToggle() {
      if (!this.playing) {
        this.play();
      } else {
        this.pause();
      }
    },
    onPlay() {
      this.playing = true;
      this.loading = false;
      this.loadingClass = "";
    },
    onPause() {
      this.playing = false;
    },
    onCanPlay() {
      if (this.playing) {
        this.loadingClass = "";
      }
    },
    onWaiting() {
      this.loadingClass = "loading";
    },
    onLoad() {
      //console.log("loadd");
      this.loaded = true;
    },
    initProps() {
      this.defaultBy = Object.assign(this.defaultBy, this.by);
    },
    autoPlay() {
      if (this.autoplay) {
        this.play();
      }
    }
  },
  mounted() {
    this.player = this.$refs.player;
    this.initProps();
    this.autoPlay();
  }
};
</script>

<style></style>
