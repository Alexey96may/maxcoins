<template>
  <main class="home">
    <section class="main_info_wrapper">
      <main-info></main-info>

      <img
        class="main_info_wrapper_img"
        src="../assets/backgraundMainInfo.png"
        alt="coins"
      />
    </section>
    <section class="new_coins">
      <div class="new_coins_title"><h2>Новые поступления</h2></div>
      <hr />
      <div class="new_card_wrapper">
        <template v-if="coins.length > 0">
          <coin-card
            v-for="item in coins"
            :key="item.id"
            :title="item.title"
            :description="item.history"
            :endlink="item.id"
            :year="item.year"
            :isAvailable="item.count > 0"
            :isSelling="item.isSelling"
            :imagePath="item.images[0]"
          ></coin-card>
        </template>
        <div v-else><p>Ничего не найдено</p></div>
      </div>
    </section>
    <hr class="standart_hr" />
    <section class="img_bottom">
      <img src="../assets/img_bottom.png" alt="coins" />
    </section>
  </main>
</template>

<script setup lang="ts">
import CoinCard from "../components/CoinCard.vue";
import MainInfo from "../components/MainInfo.vue";
import { useStore } from "vuex";
import { reactive } from "vue";

const store = useStore();
let coins = reactive(store.state.coins);
</script>

<style lang="scss">
$padding: 50px;
$margin: 50px;

.main_info_wrapper {
  height: 844px;
  margin-bottom: -50px;
  margin-top: -10px;
  position: relative;
  overflow: hidden;
  width: 100%;

  .main_info_wrapper_img {
    position: absolute;
    display: block;
    z-index: -999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.new_coins {
  margin-bottom: $margin;
  .new_coins_title h2 {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 36px;
    text-align: center;
    color: #000;
  }

  hr {
    width: 85%;
    border: 2px solid #777777;
    margin: 48px auto;
  }

  .new_card_wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    overflow: auto;
    padding: 25px;

    & > div {
      margin-right: 25px;
    }
    & > div:last-child {
      margin-right: 0;
    }
  }
}

.standart_hr {
  border: 2px solid #777777;
  width: 100%;
  margin: 0;
}

.img_bottom {
  width: 100%;
  height: 710px;

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    display: block;
  }
}
</style>
