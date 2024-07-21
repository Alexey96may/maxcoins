import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    coins: [
      {
        id: "1",
        title: "3 пфеннига",
        year: 1803,
        history: "An old coin",
        characters: [
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
        ],
        images: ["1.jpg", "2.jpg", "gd.jpg"],
        isSelling: false,
        count: 1,
        date: "20.06.2024",
        type: "монеты",
        country: "Россия",
      },
      {
        id: "2",
        title: "Победный крейцер",
        year: 1871,
        history: "An old coin",
        characters: [
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
        ],
        images: ["fd.jpg", "fd.jpg", "fd.jpg"],
        isSelling: true,
        count: 1,
        date: "23.06.2024",
        type: "монеты",
        country: "Великобритания",
      },
      {
        id: "3",
        title: "3 пфеннига",
        year: 1803,
        history: "An old coin",
        characters: [
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
        ],
        images: ["gd.jpg", "gd.jpg", "gd.jpg"],
        isSelling: false,
        count: 0,
        date: "25.06.2024",
        type: "банкноты",
        country: "Россия",
      },
      {
        id: "4",
        title: "Cash",
        year: 1324,
        history: "An old coin",
        characters: [
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
        ],
        images: ["card_title.png", "card_title.png", "card_title.png"],
        isSelling: false,
        count: 1,
        date: "22.06.2024",
        type: "монеты",
        country: "Германия",
      },
      {
        id: "5",
        title: "CoinCash",
        year: -1557,
        history: "An old coin",
        characters: [
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
        ],
        images: ["fd.jpg", "fd.jpg", "fd.jpg"],
        isSelling: false,
        count: 1,
        date: "20.05.2024",
        type: "банкноты",
        country: "Россия",
      },
      {
        id: "6",
        title: "CoinCash",
        year: 1996,
        history: "An old coin",
        characters: [
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
        ],
        images: ["gd.jpg", "gd.jpg", "gd.jpg"],
        isSelling: false,
        count: 0,
        date: "27.05.2024",
        type: "монеты",
        country: "Россия",
      },
      {
        id: "7",
        title: "a title",
        year: 1996,
        history: "An old coin",
        characters: [
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
        ],
        images: ["fd.jpg", "fd.jpg", "fd.jpg"],
        isSelling: false,
        count: 1,
        date: "01.07.2024",
        type: "монеты",
        country: "Италия",
      },
      {
        id: "8",
        title: "a title",
        year: 1996,
        history: "An old coin",
        characters: [
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
        ],
        images: ["card_title.png", "card_title.png", "card_title.png"],
        isSelling: false,
        count: 1,
        date: "22.06.2024",
        type: "монеты",
        country: "Греция",
      },
      {
        id: "9",
        title: "a title",
        year: 1996,
        history: "An old coin",
        characters: [
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
        ],
        images: ["card_title.png", "card_title.png", "card_title.png"],
        isSelling: false,
        count: 1,
        date: "29.07.2024",
        type: "монеты",
        country: "Россия",
      },
      {
        id: "10",
        title: "a title",
        year: 1996,
        history: "An old coin",
        characters: [
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
        ],
        images: ["card_title.png", "card_title.png", "card_title.png"],
        isSelling: false,
        count: 1,
        date: "12.06.2024",
        type: "монеты",
        country: "Россия",
      },
      {
        id: "11",
        title: "a title",
        year: 1996,
        history: "An old coin",
        characters: [
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
        ],
        images: ["gd.jpg", "gd.jpg", "gd.jpg"],
        isSelling: false,
        count: 1,
        date: "11.07.2024",
        type: "банкноты",
        country: "Россия",
      },
      {
        id: "12",
        title: "a title",
        year: 1996,
        history: "An old coin",
        characters: [
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
          {
            characterName: "the character name",
            characterText: "the character text",
          },
        ],
        images: ["card_title.png", "card_title.png", "card_title.png"],
        isSelling: false,
        count: 1,
        date: "10.05.2024",
        type: "монеты",
        country: "Россия",
      },
    ],
    mainInfo: [
      {
        id: 1,
        image: "coins.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Consequat mauris nunc congue nisi vitae suscipit tellus. Vulputate ut pharetra sit amet. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Mi quis hendrerit dolor magna eget. Sed augue lacus viverra vitae congue eu consequat.",
      },
      {
        id: 2,
        image: "maxGolden.jpg",
        text: "Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Ut faucibus pulvinar elementum integer enim neque. Etiam erat velit scelerisque in dictum. Mauris rhoncus aenean vel elit. Elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet consectetur adipiscing elit ut aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada. Odio euismod lacinia at quis risus. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Enim facilisis gravida neque convallis a cras semper auctor. Massa sed elementum tempus egestas sed sed.",
      },
      {
        id: 3,
        image: "coins.png",
        text: "Purus viverra accumsan in nisl. Ornare massa eget egestas purus viverra accumsan in. Tellus at urna condimentum mattis pellentesque id nibh. Sed risus pretium quam vulputate dignissim suspendisse. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Tristique senectus et netus et. Diam ut venenatis tellus in metus vulputate eu scelerisque. Volutpat commodo sed egestas egestas fringilla phasellus. Nisi est sit amet facilisis magna etiam tempor orci. Augue interdum velit euismod in pellentesque massa.",
      },
      {
        id: 4,
        image: "coins.png",
        text: "Posuere sollicitudin aliquam ultrices sagittis orci a. Netus et malesuada fames ac turpis egestas integer eget aliquet. Massa tempor nec feugiat nisl pretium. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Senectus et netus et malesuada fames. Lectus mauris ultrices eros in cursus.",
      },
    ],
    siteInfo: {},
  },
  getters: {
    COINS(state) {
      return state.coins;
    },
  },
  mutations: {
    PUT_COINS_TO_STATE: (state, coins) => {
      if (!state.coins.length) {
        state.coins = coins;
      }
    },
  },
  actions: {
    async GET_COINS_FROM_IP({ commit }) {
      const data = await axios("http://localhost:3000/coins", {
        method: "GET",
      });
      if (data.data) {
        // Записываете новости в стору с помощью мутации
        commit("PUT_COINS_TO_STATE", data.data);
      } else {
        console.log(
          "Ошибка: " + "не удалось выполнить запрос, повторите попытку позже."
        );
      }

      return data;
    },
  },
});
