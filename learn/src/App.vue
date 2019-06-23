<template>
  <div id="app">
    <div class="center">
    <Leftbl    />
    <div class="block">
       <router-view/>
<div class="main">
        <div class="button_vue">
       <router-link to="/" > назад</router-link>
      <router-link to="/Step2"  > Далее</router-link>
        </div>
        </div>
    </div>
    </div>
  </div>
</template>
      
 
<script>
import Leftbl from './components/leftbl.vue';
export default {
  name: 'app',
  components: {
    Leftbl,
   
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
.block{
  display: flex;
  flex-direction: column;
}
.main{
    padding: 20px 3%;
}
  .button_vue{
    font-family: 'Hind Siliguri', sans-serif;
    padding: 30px;
    width: 500px;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 0 2px 4px #c4c2c2;
    border-radius: 4px;
  }
</style>
