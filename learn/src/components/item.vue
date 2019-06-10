<template>
<div>
    <li @click="viewDetailsClicked" :class="{active : isActive}" class="cryptoblock">
        <img  :src=getImgUrl(item.src) alt="">
        <p>{{item.text}}</p>

    </li>
</div>
</template>

<script>
import { bus } from '../main';
export default {
    props: ['item'],
    data() {
        return {
            isActive: true,
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/' + pic);
        },
        viewDetailsClicked() {
            bus.$emit("viewData", [this.item.src, this.item.text, this.item.backgroundcolor])

        },

    },
    
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
    .active{
        background: rgb(238, 238, 238);
    }
}
</style>
