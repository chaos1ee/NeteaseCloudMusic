<template>
  <div class="block">
    <block-header :blockHeader="block.header"></block-header>
    <hot v-if="block.type==0" :hot="block.data"></hot>
    <personalized v-else-if="block.type==1" :personalized="block.data"></personalized>
    <album v-else-if="block.type==2" :album="block.data"></album>
    <bill v-else :bill="block.data"></bill>
  </div>
</template>

<script>
import BlockHeader from "./block-header";
import Hot from "./hot";
import Personalized from "./personalized";
import Album from "./album";
import Bill from "./bill";

export default {
  name: "block",
  props: ["block"],
  components: {
    BlockHeader,
    Hot,
    Personalized,
    Album,
    Bill
  }
};
</script>
