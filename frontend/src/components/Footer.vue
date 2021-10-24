<template functional>
  <footer>
    <div class="footer">
      <h6>A Vue js application with GraphQL</h6>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Footer extends Vue {}
</script>

<style>
.footer {
  background-color: #24252a;
  margin-top: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1px;
  height: 40px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
.footer h6 {
  font-size: large;
  font-weight: 400;
  text-decoration: none;
  color: white;
}
</style>
