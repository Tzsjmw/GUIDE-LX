<template>
  <div class="page-table">
    <div>
      <h2>测试题</h2>
    </div>
    <el-table :data="tableData" style="width: 100%" border>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    tableData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array as any,
      required: true
    },
    showTitle: {
      type: Boolean,
      require: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.subject {
  margin: 5px;

  padding: 5px;

  font-size: 20px;
}

.subject > span {
  display: inline-block;

  text-align: center;

  width: 20px;
}

.subject input {
  width: 50px;

  height: 20px;
}

.right {
  color: green;
}

.error {
  color: red;
}

.undo {
  color: #ccc;
}

body {
  background-color: #eee;
}

#app {
  background-color: #fff;

  width: 500px;

  margin: 50px auto;

  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);

  padding: 2em;
}
</style>
