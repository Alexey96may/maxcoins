<template>
  <main class="home">
    <div class="hoverImg" :class="hoverImgPlus" @click="hoverImgSetDown()">
      <img :src="require(`../assets/` + mainPhoto)" alt="photo of the coin" />
    </div>
    <section class="main_info_wrapper">
      <main-info></main-info>
      <img
        class="main_info_wrapper_img"
        src="../assets/backgraundMainInfo.png"
        alt="coins"
      />
    </section>
    <section class="card_info">
      <div class="card_info_title">
        <h2>{{ pageData.title }}</h2>
      </div>
      <hr />
      <div class="card_wrapper">
        <div class="card_maininfo_wrapper">
          <div class="coin_preview">
            <div class="coin_mainphoto">
              <img
                :src="require(`../assets/` + mainPhoto)"
                @click="hoverImgSetUp()"
                alt="photo of the coin"
              />
            </div>
            <div class="coin_gallery">
              <div
                class="coin_gallery__img"
                @click="setMainPhoto(pageData.images[1])"
              >
                <div
                  class="image_closing"
                  :class="{
                    image_closing_active: mainPhoto !== pageData.images[1],
                  }"
                ></div>
                <img
                  :src="require(`../assets/` + pageData.images[1])"
                  alt="photo of the coin"
                />
              </div>
              <div
                class="coin_gallery__img"
                @click="setMainPhoto(pageData.images[0])"
              >
                <div
                  class="image_closing"
                  :class="{
                    image_closing_active: mainPhoto !== pageData.images[0],
                  }"
                ></div>
                <img
                  :src="require(`../assets/` + pageData.images[0])"
                  alt="photo of the coin"
                />
              </div>
              <div
                class="coin_gallery__img"
                @click="setMainPhoto(pageData.images[2])"
              >
                <div
                  class="image_closing"
                  :class="{
                    image_closing_active: mainPhoto !== pageData.images[2],
                  }"
                ></div>
                <img
                  :src="require(`../assets/` + pageData.images[2])"
                  alt="photo of the coin"
                />
              </div>
            </div>
            <a href="https://vk.com" target="_blank" class="coin_button"
              >Связаться для обмена</a
            >
          </div>
          <div class="coin_characters">
            <h4>Характеристики</h4>
            <hr />
            <ul>
              <li
                v-for="(item, number) in pageData.characters"
                v-bind:key="number"
              >
                <strong>{{ item.characterName }}</strong
                >:
                {{ item.characterText }}
              </li>
            </ul>
          </div>
        </div>
        <div class="card_history">
          <h4>История</h4>
          <hr />
          <p>
            {{ pageData.history }}
          </p>
        </div>
      </div>
    </section>
    <hr class="standart_hr" />
    <section class="img_bottom">
      <img src="../assets/img_bottom.png" alt="coins" />
    </section>
  </main>
</template>

<script setup lang="ts">
import MainInfo from "../components/MainInfo.vue";
import { useStore } from "vuex";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";

const store = useStore();
const coins = reactive(store.state.coins);
const pageID = useRoute().params.id;
let hoverImgPlus = ref("hoverImgDown");

const pageData = reactive(pageDataSearcher(coins));

interface CoinsObj {
  id: number | string;
  title: string;
  year: number;
  history: string;
  characters: Array<object>;
  images: Array<string>;
  isSelling: boolean;
  count: number;
  date: string;
  type: string;
  country: string;
}

let mainPhoto = ref(pageData.images[0]);
function setMainPhoto(newUrl: string): string {
  mainPhoto.value = newUrl;
  return newUrl;
}

function pageDataSearcher(coinsArr: Array<CoinsObj>): CoinsObj {
  return coinsArr.filter((el) => el.id === pageID)[0];
}

function hoverImgSetUp() {
  hoverImgPlus.value = "hoverImgUp";
}
function hoverImgSetDown() {
  hoverImgPlus.value = "hoverImgDown";
}
</script>

<style lang="scss">
$padding: 50px;
$margin: 50px;
.hoverImg {
  transition: all 0.3s;
}
.hoverImgUp {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  background-color: #000000ad;
  overflow: auto;

  img {
    width: initial;
    width: initial;
    position: absolute;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    top: 50%;
  }
}
.hoverImgDown {
  width: 0;
  height: 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  background-color: #000000ad;
  overflow: auto;

  img {
    width: initial;
    width: initial;
    position: absolute;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    top: 50%;
  }
}

.card_info {
  margin-bottom: $margin;
  .card_info_title h2 {
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

  .card_wrapper {
    margin: $margin;

    h4 {
      font-family: var(--font-family);
      font-weight: 700;
      margin: 0;
      font-size: 24px;
      text-align: center;
      color: #000;
    }

    .card_maininfo_wrapper {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: stretch;
      margin-bottom: $margin;

      .coin_preview {
        padding: $padding;
        background-color: #d9d9d9;
        margin-right: $margin;

        .coin_mainphoto {
          margin: 0 auto;
          width: 320px;
          height: 320px;
          margin-bottom: 40px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
        }
        .coin_gallery {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-around;
          align-items: center;
          border-radius: 20px;
          background-color: #cccccc;
          margin-bottom: 40px;
          padding: 40px;

          .coin_gallery__img {
            width: 144px;
            height: 144px;
            margin-right: 40px;
            position: relative;

            .image_closing {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
              transition: all 0.3s;

              background-color: #0000008f;
            }
            .image_closing_active {
              opacity: 1;
            }

            &:last-child {
              margin-right: 0;
            }

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
            }
          }
        }
        .coin_button {
          display: block;
          padding: 12px;
          margin: 0 auto;
          box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.72);
          background: #b0b0b0;
          border-radius: 20px;
          width: 485px;
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 24px;
          text-align: center;
          color: #000;
        }
      }

      .coin_characters {
        padding: $padding;
        background-color: #d9d9d9;
        width: 100%;

        hr {
          margin: 30px;
          border-width: 1px;
        }
      }
    }

    .card_history {
      padding: $padding;
      background-color: #d9d9d9;

      hr {
        margin: 30px;
        border-width: 1px;
      }
      p {
        text-align: center;
      }
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
