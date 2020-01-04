<template>
<div>
    <li @click="viewDetailsClicked(); addToDataVuex()" class="get-item__bank">
        <img class="get-item__bank--img" :src=getImgUrl(bank.src) alt="">
        <p class=get-item__bank--name>{{bank.text}}</p>

    </li>
</div>
</template>

<script>
import {
    bus
} from '../main';
export default {

    props: ['bank'],
    methods: {
        getImgUrl(pic) {
            return require('@/assets/' + pic);
        },
        viewDetailsClicked() {
            bus.$emit("bankData", [this.bank.src, this.bank.text, this.bank.backgroundcolor])
        },
        addToDataVuex() {
            var data = {
                src2: this.bank.src,
                text2: this.bank.text,
            }
            this.$store.dispatch('addDataRight', data)
        }

    }
}
</script>

<style lang="scss" scoped>
.get-item__bank {

    font-family: 'Hind Siliguri', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid rgba(207, 207, 207, 0.356);

    &--img {
        margin-left: 20px;
        width: 30px;
        height: 30px;
    }

    &--name {
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
