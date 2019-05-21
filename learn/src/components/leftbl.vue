<template>
<div class="hello">

    <div class="leftb">

        <div class="firstb">
            <h2>1. Отдаете</h2>
            <ul>
                <li v-for='item of items' :key="item.class" class="cryptoblock">
                    <img :src=getImgUrl(item.src) alt="">
                    <p>{{item.text}}</p>

                </li>
            </ul>
        </div>

        <div class="secondb">
            <h2>2. Получаете</h2>
            <ul>
                <li v-for='item1 of items1' :key="item1.class" class="cryptoblock">
                    <img :src=getImgUrl(item1.src) alt="">
                    <p>{{ item1.text }}</p>
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
    data() {
        return {
           
            items: [{
                    class: '1',
                    src: "BTC.png",
                    text: 'Bitcoin'
                },
                {
                    class: '2',
                    src: "USDT.png",
                    text: 'Tether'
                },
                {
                    class: '3',
                    src: "GAS.png",
                    text: 'Neo'
                },
                {
                    class: '4',
                    src: "ETH.png",
                    text: 'Ethereum'
                },
                {
                    class: '5',
                    src: "EOS.png",
                    text: 'EOS'
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
        getImgUrl(pic) {
            return require('../assets/' + pic);
        },

    },
   

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.hello {
    background-image: url(../assets/bg3.png);
    padding: 20px 3%;
}

ul {
    padding: 0;
    margin: 0;
}

.leftb {
    width: 560px;
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
            font-family: 'Hind Siliguri', sans-serif;
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
            font-family: 'Hind Siliguri', sans-serif;
            font-weight: 500;
            font-size: 18px;
            color: #000000;
        }

        display: flex;
        flex-direction: column;
        width: 50%;
    }
}

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
