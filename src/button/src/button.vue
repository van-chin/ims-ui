<template>
  <el-button v-bind="$attrs" v-on="$listeners" @click.prevent="handleClick"
    >{{ text }}
  </el-button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ImsButton",
  props: {
    text: String
  },
  methods: {
    handleClick(evt: any) {
      this.$emit("click", evt);
    }
  }
});
</script>
