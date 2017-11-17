<template>
  <div class="lyric">
    <slot name="lyric" v-for="line in lyric" :line="line"></slot>
    <slot name="tLyric" v-for="line in tLyric" :line="line"></slot>
  </div>
</template>


<script>
export default {
  name: "lyric",
  props: ["lyric", "tLyric"]
};
</script>
