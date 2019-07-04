<template>
<div class="hello">
    <div class="leftb">

        <div class="firstb" :class="{ blocked : isblocked} ">
            <h2>1. Отдаете</h2>
            <Item v-for='item of items' :key="item.clas" :item="item"></Item>
        </div>

        <div class="secondb">
            <h2>2. Получаете</h2>
            <Item2 v-for='item1 of items1' :key="item1.class" :item1="item1"></Item2>

        </div>

    </div>
</div>
</template>

<script>
import Item from './item.vue';
import Item2 from './item2.vue';
import {
    mapGetters
} from 'vuex';

export default {
    components: {
        Item,
        Item2
    },
    name: 'Leftbl',

    data() {
        return {
            items: [{
                    clas: '1',
                    src: "BTC.png",
                    text: 'Bitcoin',
                    backgroundcolor: "#f4b41f"
                },
                {
                    clas: '2',
                    src: "USDT.png",
                    text: 'Tether',
                    backgroundcolor: "#16a085",
                    color: "#ffffff"
                },
                {
                    clas: '3',
                    src: "GAS.png",
                    text: 'Neo',
                    backgroundcolor: "#34c150"
                },
                {
                    clas: '4',
                    src: "ETH.png",
                    text: 'Ethereum',
                    backgroundcolor: "#2553a3"
                },
                {
                    clas: '5',
                    src: "EOS.png",
                    text: 'EOS',
                    backgroundcolor: "#010916",
                    color: "#ffffff"
                }

            ],

            items1: [{
                    class: '1',
                    src: "Advcash.png",
                    text: 'Advcash'
                },
                {
                    class: '2',
                    src: "Alfabank.png",
                    text: 'Alfabank'
                },
                {
                    class: '3',
                    src: "Payeer.png",
                    text: 'Payeer'
                },
                {
                    class: '4',
                    src: "Paypal.png",
                    text: 'Paypal'
                },
                {
                    class: '5',
                    src: "Payza.png",
                    text: 'Payza'
                },
                {
                    class: '6',
                    src: "Perfect-Money.png",
                    text: 'Perfect-Money'
                },
                {
                    class: '7',
                    src: "Qiwi.png",
                    text: 'Qiwi RUB'
                },
                {
                    class: '8',
                    src: "Sberbank.png",
                    text: 'Sberbank RUB'
                },
                {
                    class: '9',
                    src: "Skrill.png",
                    text: 'Skrill '
                },
                {
                    class: '10',
                    src: "Tinkoff.png",
                    text: 'Tinkoff RUB'
                }

            ]
        }
    },

    methods: {

    },
    computed: {
        ...mapGetters([
            'isblocked'
        ])
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.hello {

    background-image: url(../assets/bg3.png);

    padding: 20px 3%;

}

.blocked {
    &:after {
        margin-top: 20px;
        margin-left: 4.4%;
        content: '';
        display: block;
        top: 0%;
        left: 0%;
        background-color: rgba(83, 83, 83, 0.048);
        height: 90%;
        width: 39.5%;
        position: absolute;
        z-index: 1;

    }
}

ul {
    padding: 0;
    margin: 0;
}

.leftb {

    width: 90%;
    background: white;
    padding: 0px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    box-shadow: 0 2px 4px #c4c2c2;
    border-radius: 4px;

    .firstb {
        h2 {
            padding: 15px 10px;
            font-family: 'Ubuntu', sans-serif;
            font-weight: 500;
            font-size: 18px;
            color: #000000;
        }

        display: flex;
        flex-direction: column;
        width: 50%;
    }

    .secondb {
        h2 {
            padding: 15px 10px;
            font-family: 'Ubuntu', sans-serif;
            font-weight: 500;
            font-size: 18px;
            color: #000000;
        }

        display: flex;
        flex-direction: column;
        width: 50%;
    }
}
</style>
