<template>
  <div class="home">
    <Machine />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Machine from "@/components/Machine.vue"; // @ is an alias to /src

@Component({
  components: {
    Machine,
  },
})
export default class Home extends Vue {}
</script>
