
<template>
  <div class="border">
    Link :
    <input v-model="url" @input="onChangeURL" />
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'InputLink',
  props: {
    url: {
      required: true,
      type: String
    }
  },
  model: {
    prop: 'url',
    event: 'change'
  },
  methods: {
    onChangeURL (e) {
      if (e.target) {
        this.$emit('change', e.target.value)
      }
    }
  }
})
</script>
<style scoped>
.border {
  border: 1px solid black;
}
</style>
