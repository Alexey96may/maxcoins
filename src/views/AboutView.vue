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
import MainInfo from "../components/MainInfo.vue";

export default {
  components: {
    MainInfo,
  },
};
</script>

<style lang="scss">
$padding: 50px;
$margin: 50px;

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
