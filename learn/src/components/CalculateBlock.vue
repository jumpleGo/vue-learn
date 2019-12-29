<template>
<div class="hello">
    <div class="rightb">
        <div class="cryptochange">
            <h2>Откуда</h2>
            <div :style="{backgroundColor:backgroundcolor, color: color}" class="wallet">
                <div class="top">
                    <img src="../assets/sim-card-chip.png" alt="">
                    <img :src=getImgUrl(src1) alt="">
                    

                </div>
                <div class="center">

                    <p>Адрес кошелька</p>
                    <input type="text" :style="{color:color}" v-model="cardnumbercrypto" placeholder="1NeJEFzY8PbVS9RvYPfDP93iqXxHjav791">

                </div>
                <div class="bottom">
                    Cумма: <input type="text" :style="{color:color}" v-model="sellprice" placeholder="1.2"> {{utf}}

                </div>
            </div>
        </div>
        <div class="bankchange">
            <h2>Куда</h2>

            <div :style={background:backgroundcolor2} class="wallet">
                <div class="top">
                    <img src="../assets/sim-card-chip.png" alt="">
                    <img :src=getImgUrl(src2) alt="">
                </div>
                <div class="center">
                    <p>Номер карты</p>
                    <input class="mask" type="text" v-model="cardnumberbank">

                </div>
                <div class="bottom">
                    Cумма: <input type="text" v-model="buyprice"> RUB

                </div>
            </div>
        </div>
        <button class="btn" @click="bigmethod">Сохранить</button>
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

            src1: 'BTC.png',
            text1: '',
            backgroundcolor: '#f4b41f',
            src2: 'Advcash.png',
            text2: '',
            backgroundcolor2: 'linear-gradient(135deg, rgb(26, 159, 41), rgb(13, 117, 24))',
            sellprice: '',
            buyprice: '',
            cardnumberbank: " ",
            cardnumbercrypto: '',
            utf: 'BTC',
            color: '',
            cost: 0,
        }

    },

    methods: {
        getImgUrl(pic) {
            return require('../assets/' + pic);
        },
        addPrice() {
            var obj = {
                cardnumbercrypto: this.cardnumbercrypto,
                cardnumberbank: this.cardnumberbank,
                buyprice: this.buyprice,
                sellprice: this.sellprice,

            }
            this.$store.dispatch('addPrice', obj);

        },
        editisblocked() {
            this.$store.commit('EDIT_ISBLOCKED')
        },

        editpath() {
            this.$store.dispatch('editpath', 'step2');
        },
        bigmethod() {
            this.editisblocked();
            this.addPrice();
            this.editpath()
        }

    },
  

    created() {

        bus.$on('viewData', data => {
            this.src1 = data[0];
            this.backgroundcolor = data[2];
            this.utf = data[3],
            this.color = data[4],
            this.cost = data[6]
        })

        bus.$on('viewData1', data => {
            this.src2 = data[0];
            this.backgroundcolor2 = data[2]
        });

    },

    watch: {
        sellprice: function (val) {
            this.sellprice = val;
            this.buyprice = val * (this.cost*0.97);
        },
        buyprice: function (val) {
            this.buyprice = val;
            this.sellprice = val / (this.cost * 0.97);
        }
    }
}
</script>

<style lang="scss" scoped>
input {
    background: rgba(0, 0, 0, 0.103);
    padding: 5px;
    border: none;
    outline: none;
}

input::placeholder {
    color: rgba(0, 0, 0, 0.493);
}

.rightb {
    font-family: 'Hind Siliguri', sans-serif;
    padding: 10px 30px;
    width: 90%;
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

            padding: 20px 20px;
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

                input {
                    min-width: 20px;
                }
            }

            .center {
                font-size: 19px;
                display: flex;
                flex-direction: column;
                text-align: left;

                p {
                    margin-top: 15px;
                    margin-bottom: 10px;
                }

                input {
                    text-align: center;
                }
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

            padding: 20px 20px;
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

                input {
                    color: white
                }
            }

            .center {
                font-size: 19px;
                display: flex;
                flex-direction: column;
                text-align: left;

                input {
                    color: white;
                    font-size: 22px;
                }
            }
        }
    }

}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .rightb {
    font-family: 'Hind Siliguri', sans-serif;
    padding: 10px 0px;
    width: 100%;
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
        flex-direction: column;
        justify-content: space-between;

        .wallet {

            padding: 20px 10px;
            box-shadow: 0 2px 4px #c4c2c2;
            border-radius: 4px;
            width: 90%;
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

                input {
                    min-width: 20px;
                }
            }

            .center {
                font-size: 19px;
                display: flex;
                flex-direction: column;
                text-align: left;

                p {
                    margin-top: 15px;
                    margin-bottom: 10px;
                }

                input {
                    text-align: center;
                }
            }
        }
    }

    .bankchange {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .wallet {
            color: white;

            padding: 20px 10px;
            box-shadow: 0 2px 4px #c4c2c2;
            border-radius: 4px;
            width: 90%;
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

                input {
                    color: white
                }
            }

            .center {
                font-size: 19px;
                display: flex;
                flex-direction: column;
                text-align: left;

                input {
                    color: white;
                    font-size: 22px;
                }
            }
        }
    }

}
}
</style>
