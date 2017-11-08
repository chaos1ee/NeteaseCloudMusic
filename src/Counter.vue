<template>
  <div class="counter">
    <h2>{{ msg }}</h2>
    <hr/>
    <h3>{{ count }}</h3>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "Counter",
  data() {
    return {
      msg: "hello"
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    ...mapMutations(["add", "reduce"])
  }
};
</script>
