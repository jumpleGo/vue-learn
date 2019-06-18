<template>
  <div id="app">
    <div class="center">
    <Leftbl    />
    <Rightbl />
    </div>
  </div>
</template>

<script>
import Leftbl from './components/leftbl.vue';
import Rightbl  from './components/rightbl.vue';


export default {
  name: 'app',
  components: {
    Leftbl,
    Rightbl
  },
  data(){
    return{
     
      
    }
  },
 
   
   
   
}
</script>

<style lang="scss">

#app {
  background-image: url(assets/bg3.png);
  padding:20px 3%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

}
.center{
  display: flex;
  flex-direction: row;
  justify-content: space-around;

}
</style>
