<template>
  <div>
    <PropsTest v-bind:text="text" />
  </div>
</template>

<script>
import PropsTest from "@/components/PropsTest.vue";
export default {
  components: {
    PropsTest,
  },
  data() {
    return {
      text: [1,2,3],
    };
  },
};
</script>

<style></style>
