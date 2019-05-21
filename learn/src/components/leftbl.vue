<template>
  <div class="hello">
   
   <div class="leftb">


     <div class="firstb">
       <ul>
      <li v-for='item of items' :key="item.class"  class="cryptoblock">
        <img :src="item.src" alt="">
      <p>{{item.text}}</p>
    
     </li>
     </ul>
    </div>
   
   
     <div class="secondb">
       <ul>
        <li class="cryptoblock">
      <img src="../assets/ETH.png" alt="">
      <p>Ethereum</p>
     </li>
       </ul>
    </div>
    </div>
   </div>
  
</template>

<script>
export default {
  name: 'Leftbl',
  props: {
    msg: String
  },
  data(){
    return{
items:[
  {class: '1', src:"../assets/BTC.png",  text : 'Bitcoin'},
  {class: '2', src:"../assets/USDT.png", text : 'Tether'},
  {class: '3', src:"../assets/GAS.png",  text : 'Neo'},
  {class: '4', src:"../assets/ETH.png",  text : 'Ethereum'},
  {class: '5', src:"../assets/EOS.png",  text : 'EOS'}

  ]
    }
  
  
},






}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  background-image: url(../assets/bg3.png);
  padding:20px 3%;
}
ul{
  padding: 0;
  margin: 0;
}
.leftb{
  width: 500px;
  background: white;
  padding: 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;

  .firstb{
  display: flex;
  flex-direction: column;
width: 50%;}
.secondb{
 display: flex;
  flex-direction: column;
width: 50%;
}
}



.cryptoblock{
  font-family: 'Hind Siliguri', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items: center;
  border: 1px solid rgba(207, 207, 207, 0.356);
  img{
    margin-left: 40px;
    width: 30px;
    height: 30px;
  }
  p{
    font-size: 16px;
    margin-left: 50px;
  }
}


</style>
