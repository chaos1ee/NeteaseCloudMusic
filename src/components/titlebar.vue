<template>
  <div class="bh">
    <slot name="title"></slot>
    <slot name="subtitle"></slot>
    <slot name="more"></slot>
  </div>
</template>

<script>
export default {
  name: "title-bar"
};
</script>
