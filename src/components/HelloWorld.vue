<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h2>Showcase Child Component with v-model</h2>
      <b>Input Link</b><br>
      <input-link v-model="url" />
      The URL : {{ url }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import InputLink from './InputLink'

export default Vue.extend({
  name: 'HelloWorld',
  components: {
    InputLink
  },
  props: {
    msg: String
  },
  data () {
    return {
      url: ''
    }
  }
})
</script>
