<template>
  <div class="login">
    <regis-panel></regis-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RegisPanel from './cpns/regis-panel.vue'

export default defineComponent({
  components: {
    RegisPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/bag-register.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>
