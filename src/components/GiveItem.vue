<template>
<div>
    <li @click="viewDetailsClicked(); addToDataVuex()"  class="give-item__crypto">
        <img class="give-item__crypto--img" :src=getImgUrl(crypto.src) alt="">
        <p class="give-item__crypto--name">{{crypto.text}}</p>

    </li>
</div>
</template>

<script>
import {
    bus
} from '../main';
export default {
    props: ['crypto'],
    data() {
        return {
          data_object: {
                src1: this.crypto.src,
                text1: this.crypto.text,
                utf: this.crypto.utf,
                qr: this.crypto.qr,
                address: this.crypto.address
          }
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('@/assets/' + pic);
        },

        addToDataVuex() {
            this.$store.dispatch('addDataLeft', this.data_object)
        },

        viewDetailsClicked() {
            bus.$emit("cryptoData", [this.crypto.src, this.crypto.text, this.crypto.backgroundcolor, this.crypto.utf, this.crypto.color, this.crypto.address, this.crypto.cost, this.crypto.min, this.crypto.max])
        },
    },
}
</script>

<style lang="scss" scoped>
.give-item__crypto {
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
