<template>
<div id="app">
    <div class="application">
        <div class="application__select-cryptocurrency">
            <select-crypto-block />
        </div>
        <div class="application__actions">
            <keep-alive>
                <router-view />
            </keep-alive>
            <div class="application__actions-buttons">
                <router-link class="application__actions-buttons--left" to="/">назад</router-link>
                <router-link class="application__actions-buttons--right" :to="{name: name }">далее</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    bus
} from './main';
import SelectCryptoBlock from './components/SelectCryptoBlock.vue';
import {
    mapGetters
} from 'vuex';
export default {
    name: 'app',
    components: {
        SelectCryptoBlock,

    },
    created() {
        bus.$on('viewDetails', data => {
            this.price1 = data[0];
            this.price2 = data[1]
        });
    },
    computed: {
        ...mapGetters([
            'name'
        ]),

    },

}
</script>

<style lang="scss">
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 0px;
    width: 120px;
    margin-top: 20px;
    color: white;
    background: rgb(42, 5, 141);
}

#app {
    background-image: url(assets/bg3.png);
    padding: 0px 3%;
    font-family: 'Ubuntu', sans-serif;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
}

.application {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    &__select-cryptocurrency {
        width: 50%;
    }

    &__actions {
        padding: 20px 3%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 45%;

        &-buttons {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 20px;
            font-family: 'Hind Siliguri', sans-serif;
            padding: 20px 3%;
            background: white;
            border-radius: 5px;
            box-shadow: 0 2px 4px #c4c2c2;
            border-radius: 4px;

            &--left {
                border: 3px solid #e5e5e5;
                padding: 10px 30px;
                font-size: 14px;
                text-decoration: none;
                border-radius: 81px 81px 137px 137px / 61px 61px 100px 100px;
                text-transform: uppercase;
                color: black;
                background: #e5e5e5;
            }

            &--right {

                border: 3px solid #1e3c72;
                padding: 10px 30px;
                font-size: 14px;
                text-decoration: none;
                border-radius: 137px 137px 81px 81px / 100px 100px 61px 61px;
                text-transform: uppercase;
                color: white;
                background: #1e3c72;

            }
        }
    }

}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {

    .btn {
        padding: 10px 20px;
        border: none;
        border-radius: 0px;
        width: 120px;
        margin-top: 20px;
        color: white;
        background: rgb(42, 5, 141);
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 20px;

        &_left {
            border: 3px solid #e5e5e5;
            padding: 10px 30px;
            font-size: 14px;
            text-decoration: none;
            border-radius: 81px 81px 137px 137px / 61px 61px 100px 100px;
            text-transform: uppercase;
            color: black;
            background: #e5e5e5;
        }

        &_right {

            border: 3px solid #1e3c72;
            padding: 10px 30px;
            font-size: 14px;
            text-decoration: none;
            border-radius: 137px 137px 81px 81px / 100px 100px 61px 61px;
            text-transform: uppercase;
            color: white;
            background: #1e3c72;

        }
    }

    #app {
        background-image: url(assets/bg3.png);
        padding: 0px 1%;
        font-family: 'Ubuntu', sans-serif;
        text-align: center;
        color: #2c3e50;
        height: 100vh;
    }

    .center {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .block {
        padding: 20px 0%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }

    .left {
        width: 100%;
    }

    .button_vue {
        font-family: 'Hind Siliguri', sans-serif;
        padding: 20px 3%;

        background: white;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-shadow: 0 2px 4px #c4c2c2;
        border-radius: 4px;
    }
}
</style>
