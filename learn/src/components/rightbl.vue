<template>
<div class="hello">

    <div class="rightb">
        <div class="cryptochange">
            <h2>Откуда</h2>
            <div :style={backgroundColor:backgroundcolor} class="wallet">
                <div class="top">
                    <img src="../assets/sim-card-chip.png" alt="">
                    <img  :src=getImgUrl(src1) alt="">

</div>
                    <div class="center">

                        <p>wallet adress</p>
                        <input type="text">

</div>
                        <div class="bottom">
                            сумма: <input type="text"> BTC

</div>
                        </div>
                    </div>
                    <div class="bankchange">
                        <h2>Куда</h2>

                        <div :style={backgroundColor:backgroundcolor} class="wallet">
                            <div class="top">
                                <img src="../assets/sim-card-chip.png" alt="">
                                <img :src=getImgUrl(src2) alt="">
</div>
                                <div class="center">
                                    <p>card number</p>
                                    <input type="text">

</div>
                                    <div class="bottom">
                                        сумма: <input type="text"> RUB

</div>
                                    </div>
                                </div>

                            </div>
                        </div>
</template>

<script>
import {
    bus
} from '../main';
export default {
    name: 'Rightbl',

    data() {
        return {
            src1: '',
            text1: '',
            backgroundcolor1: '',
            src2: '',
            text2: '',
            backgroundcolor2: ''
        }

    },

    methods: {
        getImgUrl(pic) {
            return require('../assets/' + pic);
        },

    },
    created() {
        bus.$on('viewData', data => {
            this.src1 = data[0];
            this.backgroundcolor = data[2]
        });

        bus.$on('viewData1', data => {
            this.src2 = data[0];
            this.backgroundcolor2 = data[2]
        })
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.hello {

    padding: 20px 3%;
}

.rightb {
    font-family: 'Hind Siliguri', sans-serif;
    padding: 30px;
    width: 500px;

    background: white;

    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 4px #c4c2c2;
    border-radius: 4px;

    h2 {
        font-size: 25px;
        font-weight: 500;
        color: black;
    }

    .cryptochange {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .wallet {
            color: black;

            padding: 30px 20px;
            box-shadow: 0 2px 4px #c4c2c2;
            border-radius: 4px;
            width: 70%;
            display: flex;
            flex-direction: column;

            input {
                font-size: 17px;
            }

            .top {
                img {
                    width: 50px;
                    height: 50px;
                }

                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .bottom {
                font-size: 19px;
                text-align: left;
            }

            .center {
                font-size: 19px;
                display: flex;
                flex-direction: column;
                text-align: left;
            }
        }
    }

    .bankchange {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .wallet {
            color: white;
            background-image: linear-gradient(135deg, rgb(26, 159, 41), rgb(13, 117, 24));

            padding: 30px 20px;
            box-shadow: 0 2px 4px #c4c2c2;
            border-radius: 4px;
            width: 70%;
            display: flex;
            flex-direction: column;

            .top {
                img {
                    width: 50px;
                    height: 50px;
                }

                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .bottom {
                font-size: 19px;
                text-align: left;
            }

            .center {
                font-size: 19px;
                display: flex;
                flex-direction: column;
                text-align: left;
            }
        }
    }

}
</style>
