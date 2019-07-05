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
                    backgroundcolor: "#f4b41f",
                    utf: 'BTC',
                    color: 'black'
                },
                {
                    clas: '2',
                    src: "USDT.png",
                    text: 'Tether',
                    backgroundcolor: "#16a085",
                    
                    utf: 'USDT',
                    color:'white'
                },
                {
                    clas: '3',
                    src: "GAS.png",
                    text: 'Neo',
                    backgroundcolor: "#34c150",
                    utf: "NEO",
                    color: "black"
                },
                {
                    clas: '4',
                    src: "ETH.png",
                    text: 'Ethereum',
                    backgroundcolor: "#2553a3",
                    utf:"ETH",
                    color:'white'
                },
                {
                    clas: '5',
                    src: "EOS.png",
                    text: 'EOS',
                    backgroundcolor: "#010916",
                   
                    utf:"EOS",
                    color:'white'
                }

            ],

            items1: [{
                    class: '1',
                    src: "Advcash.png",
                    text: 'Advcash',
                     backgroundcolor: "linear-gradient(135deg, rgb(26, 159, 41), rgb(13, 117, 24))",
                },
                {
                    class: '2',
                    src: "Alfabank.png",
                    text: 'Alfabank',
                    backgroundcolor: 'linear-gradient(to right, #f00000, #dc281e)'
                },
               
                {
                    class: '4',
                    src: "Paypal.png",
                    text: 'Paypal',
                    backgroundcolor: 'linear-gradient(to right, #0052d4, #0052d4, #0052d4)'
                },
               
                
                {
                    class: '7',
                    src: "Qiwi.png",
                    text: 'Qiwi RUB',
                    backgroundcolor: 'linear-gradient(to right, #ffb75e, #ed8f03)'
                },
                {
                    class: '8',
                    src: "Sberbank.png",
                    text: 'Sberbank RUB',
                    backgroundcolor: '#046A38'
                },
               
                {
                    class: '10',
                    src: "Tinkoff.png",
                    text: 'Tinkoff RUB',
                    backgroundcolor: 'linear-gradient(to right, #283048, #859398)'
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
        height: 58%;
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
