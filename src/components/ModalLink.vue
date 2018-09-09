<template>
  <div>
    Link :
    <input v-model="url" @change="onChangeURL" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  model : {
    prop : 'url',
    event : 'change'
  }
})
export default class ModalLink extends Vue {
  @Prop({ required : true }) private url!: string;

  onChangeURL ( e: Event ) {
    if ( e.target ) {
      this.$emit( 'change', ( e.target as HTMLInputElement).value );
    }
  }
}
</script>
