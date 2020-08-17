<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>{{name}}</div>
    <input type="button" @click="clkInput" value="点击测试" />
    <a-button type="primary">我是antd Button</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import { AppModule } from '../store/modules/app';

@Component({
    components: {
        'HelloWorld': HelloWorld
    }
})
export default class Home extends Vue {

  name = 'Hello world';
  private mounted(): void {
    AppModule.getBooks();
  }

  clkInput() {
    console.log(AppModule.books);
  }
}
</script>
