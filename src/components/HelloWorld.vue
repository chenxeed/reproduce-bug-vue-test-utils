<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      Modal Link<br>
      <modal-link v-model="url" />
      The URL : {{ url }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ModalLink from './ModalLink.vue';

@Component({
  components : {
    ModalLink
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  url: string = "";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
