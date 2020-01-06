<template>
  <section>
        <div class="top_block">
            <div class="top_block_main_title">Ваша заявка принята</div>
            <!--  <div class="top_block_main_menu"><img class="top_block_main_menu--img" src="images/menu.png" alt=""></div> -->
        </div>
        <div class="pay_block">
            <div class="pay_block_man_info">


                <div class="pay_block_man_info_data">
                    <span class="pay_block_man_info_pay_success">успешно</span>
                    <span class="pay_block_man_info_data_card">Ваша заявка принята и будет обработана в ближашее время, ожидайте.</span>

                </div>

                <div class="pay_block_man_info_pay">
                    <span class="pay_block_man_info_pay_totaltext">Оставьте отзыв о нас!</span>


                </div>
            </div>

        </div>
        

       
    </section>
</template>
<script>


export default {
   data(){
       return{
           
       }
   },

    methods:{
        getImgUrl(pic) {
            return require('../assets/' + pic);
        },
    }
}
</script>

<style lang="scss" scoped>

section {
     padding: 20px 3%;
    font-family: 'Hind Siliguri', sans-serif;
    width: 94%;
    background: white;
    box-shadow: 0 2px 4px #c4c2c2;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
   

    .top_block {
        margin-bottom: 4%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &_main_title {
            padding-left: 10px;
            font-size: 25px;
            color: black;
            font-weight: bold;
        }


    }

    .pay_block {
        margin-bottom: 5%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &_man_info {

            padding: 5px;
            width: 100%;
            text-align: left;
            display: flex;
            flex-direction: column;

            &_pay {
                display: flex;
                flex-direction: row;




                &_success {
                    text-align: center;
                    margin-left: 20%;
                    width: 40%;
                    color: #218d21;
                    border: 2px solid #218d21;
                    padding: 10px 20px;
                    border-radius: 50px;
                    font-size: 22px;
                }



                &_totaltext {

                    color: #484848;
                    font-size: 19px;
                }


            }

            &_data {
                display: flex;
                flex-direction: column;

                &_card {
                    color: #484848;
                    font-size: 19px;
                }


            }


        }
    }
    }
</style>
