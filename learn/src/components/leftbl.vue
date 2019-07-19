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
    <div class="tarifs">
        
            <div class="images">
                <img :src=getImgUrl(items[0].src) alt="">
                <img :src=getImgUrl(items[3].src) alt="">
                <img :src=getImgUrl(items[5].src) alt="">
                <img :src=getImgUrl(items[4].src) alt="">
                <img :src=getImgUrl(items[2].src) alt="">
                <img :src=getImgUrl(items[1].src) alt="">

            </div>
           <div class="items">
                <p class="tarif_item" v-for="(object, index) in coins" :key="index">
                {{index}} <span v-for="(value, index) in object" :key="index">{{value * 0.97}} ₽</span>
            </p>
           </div>
        
    </div>

</div>
</template>

<script>
import axios from 'axios';
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
            coins: Array,
            errors: [],

            items: [{
                    clas: '1',
                    src: "BTC.png",
                    text: 'Bitcoin',
                    backgroundcolor: "#f4b41f",
                    utf: 'BTC',
                    color: 'black',
                    qr: 'btcqr.png',
                    address: '1KKPEEgq6tXLMnSAi2WzxvVwTKy8cCNf8B',
                    cost: Number

                },
                {
                    clas: '2',
                    src: "USDT.png",
                    text: 'Tether',
                    backgroundcolor: "#16a085",
                    qr: 'usdtqr.png',
                    utf: 'USDT',
                    color: 'white',
                    address: '0x812F5027bc4E4BdeF37196D50c5dA2f192E5AccF',
                    cost: Number

                },
                {
                    clas: '3',
                    src: "GAS.png",
                    text: 'Neo',
                    backgroundcolor: "#34c150",
                    utf: "NEO",
                    color: "black",
                    qr: 'neoqr.png',
                    address: 'AGZDrsHRDLAtwXfksakJnwsAo3d1b6zH5J',
                    cost: Number
                },
                {
                    clas: '4',
                    src: "ETH.png",
                    text: 'Ethereum',
                    backgroundcolor: "#2553a3",
                    utf: "ETH",
                    color: 'white',
                    qr: 'ethqr.png',
                    address: '0x812F5027bc4E4BdeF37196D50c5dA2f192E5Acc',
                    cost: Number
                },
                {
                    clas: '5',
                    src: "BNB.png",
                    text: 'BNB',
                    backgroundcolor: "#f28f0c",
                    qr: 'bnbqr.png',
                    utf: "BNB",
                    color: 'white',
                    address: 'bnb1f4nmk0sp6swcslc7whtq5lechm3cxmd82gzg3h',
                    cost: Number
                },
                {
                    clas: '6',
                    src: "LTC.png",
                    text: 'LTC',
                    backgroundcolor: "#a1a1a1",
                    qr: 'ltcqr.png',
                    utf: "LTC",
                    color: 'black',
                    address: 'LV3ZxLMhfmJZyNgKDKG1jSrWZq9m19BTwV',
                    cost: Number
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
methods:{
 getImgUrl(pic) {
            return require('../assets/' + pic);
        },
},
    created() {

        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,BNB,NEO,USDT&tsyms=RUB').then(response => {
                this.coins = response.data;
                console.log(response)
            })

            .catch(e => {
                this.errors.push(e)
            })

    },

    computed: {
        ...mapGetters([
            'isblocked'
        ]),
        setzen: function () {
            return this.items[0].cost = this.coins.BTC.RUB,
                this.items[1].cost = this.coins.USDT.RUB,
                this.items[2].cost = this.coins.NEO.RUB,
                this.items[3].cost = this.coins.ETH.RUB,
                this.items[4].cost = this.coins.BNB.RUB,
                this.items[5].cost = this.coins.LTC.RUB;

        }
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

.tarifs {
    width: 90%;
    background: white;
    padding: 0px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    box-shadow: 0 2px 4px #c4c2c2;
    border-radius: 4px;
    margin-top: 20px;
    .items{
        width: 88%;
    }
    .images{
        display: flex;
        flex-direction: column;
        img{
            padding: 5px;
            padding-left: 10px;
            width: 30px;
            height: 30px;
        }
    }
    .tarif_item{
        border-bottom: 1px solid rgba(119, 119, 119, 0.082);
        padding: 10px;
        padding-left: 40px;
       text-align: left;
       width: calc(100% - 40px);
       margin: 0;
       span{
           float: right;
       }
    }
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
