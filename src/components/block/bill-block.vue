<template>
  <div class="bill-block">
    <dl>
      <dt>
        <img class="bill-cover" :src="bill.coverImgUrl">
        <div>
          <h2 class="bill-title">{{ bill.name }}</h2>
          <span>
            <i class="bill-play"></i>
            <i class="bill-add"></i>
          </span>
        </div>
      </dt>
      <dd>
        <ol>
          <li v-for="track in bill.tracks" :key="track.id">{{ track.name }}</li>
        </ol>
      </dd>
    </dl>
  </div>
</template>

<style lang="scss" scoped>
.bill-block {
  float: left;
  width: 230px;
}
</style>

<script>
export default {
  name: "bill-block",
  props: ["bill"]
};
</script>

