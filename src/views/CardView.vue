<template>
  <main class="home">
    <section class="main_info_wrapper">
      <div class="main_info">
        <div class="main_info_logo">
          <img src="../assets/Coins.png" alt="coins" />
        </div>
        <div class="main_info_text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            porttitor nisl non fermentum euismod. In orci leo, elementum ut
            sapien et, laoreet rhoncus ex. Nunc imperdiet sem id pretium
            dapibus. Curabitur vitae nibh ante. Suspendisse eu risus felis.
            Morbi a nulla ac tortor aliquet fermentum. Curabitur efficitur
            elementum purus, quis vestibulum sem. Suspendisse molestie leo
            ligula, quis molestie neque commodo at. Phasellus id semper turpis.
            Duis eu odio quis ante ultrices vehicula non ut magna. Etiam in
            bibendum diam, et efficitur velit. Cras tempor dictum felis, a
            pulvinar metus. Nullam odio diam, viverra nec bibendum non, faucibus
            quis ipsum. Cras sit amet congue urna. Nullam ut metus eros. Quisque
            sagittis ante eget dictum consequat.
          </p>
        </div>
      </div>
      <img
        class="main_info_wrapper_img"
        src="../assets/backgraundMainInfo.png"
        alt="coins"
      />
    </section>
    <section class="about_me">
      <div class="about_me_title"><h2>Обо мне</h2></div>
      <hr />
      <div class="contacts_wrapper">
        <div class="mail_wrapper">
          <div class="contact_logo">
            <img src="../assets/email_icon.svg" alt="email" />
          </div>
          <div class="contact_link">
            <a href="mailto: name@email.com">email@gmail.com</a>
          </div>
        </div>
        <div class="tg_wrapper">
          <div class="contact_logo">
            <img src="../assets/tg_icon.svg" alt="telegram" />
          </div>
          <div class="contact_link">
            <a href="https://web.telegram.org">telegram.com</a>
          </div>
        </div>
        <div class="vk_wrapper">
          <div class="contact_logo">
            <img src="../assets/vk_icon.svg" alt="vk" />
          </div>
          <div class="contact_link">
            <a href="https://vk.com">vk.com</a>
          </div>
        </div>
      </div>
    </section>
    <hr class="standart_hr" />
    <section class="img_bottom">
      <img src="../assets/img_bottom.png" alt="coins" />
    </section>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HomeView extends Vue {}
</script>

<style lang="scss">
$padding: 50px;
$margin: 50px;

.main_info_wrapper {
  height: 844px;
  padding: 88px 50px;
  margin-bottom: -50px;
  margin-top: -10px;
  position: relative;

  .main_info_wrapper_img {
    position: absolute;
    display: block;
    z-index: -999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .main_info {
    height: 424px;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $padding;
    overflow-y: auto;

    .main_info_logo {
      margin-right: $margin;
      width: 1400px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.2s ease;
        display: inline-block;
      }
    }

    .main_info_text {
      font-family: "Encode Sans SC";
      text-align: center;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 24px;
      color: #000;
    }
  }
}

.about_me {
  margin-bottom: $margin;
  .about_me_title h2 {
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

  .contacts_wrapper {
    margin-bottom: $margin;

    & > div {
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: $margin;
    }
    & > div:last-child {
      margin-bottom: 0;
    }

    .contact_logo,
    .contact_link {
      background-color: #d9d9d9;
      border-radius: 20px;
      padding: 30px;
    }
    .contact_logo {
      margin-right: 16px;
      width: 112px;
    }
    .contact_link {
      width: 600px;
    }
    .contact_link a {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 24px;
      text-align: center;
      color: #000;
      height: 50px;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
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
