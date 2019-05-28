<template>
<div>
    <li @click="viewDetailsClicked"  class="cryptoblock">
        <img  :src=getImgUrl(item1.src) alt="">
        <p>{{item1.text}}</p>

    </li>
</div>
</template>

<script>
export default {
  
         props: ['item1'],

    
    data(){
            return{}
            },
    methods: {
        getImgUrl(pic) {
            return require('../assets/' + pic);
        },
       
    }
}
</script>

<style lang="scss" scoped>
.cryptoblock {

    font-family: 'Hind Siliguri', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid rgba(207, 207, 207, 0.356);

    img {
        margin-left: 20px;
        width: 30px;
        height: 30px;
    }

    p {
        font-size: 16px;
        margin-left: 30px;
    }

    &:hover {
        background: rgb(238, 238, 238);
        transition: 0.3s;
        cursor: pointer;
    }
}
</style>
