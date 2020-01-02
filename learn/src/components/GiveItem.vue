<template>
<div>
    <li @click="viewDetailsClicked(); addToDataVuex()"  class="give-item__banking">
        <img class="give-item__banking--img" :src=getImgUrl(crypto.src) alt="">
        <p class="give-item__banking--name">{{crypto.text}}</p>

    </li>
</div>
</template>

<script>
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
        }
       
        

    },
    
}
</script>

<style lang="scss" scoped>
.give-item__banking {
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
