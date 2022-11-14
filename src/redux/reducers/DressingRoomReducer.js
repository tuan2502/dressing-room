import dataCloth from "../../share/Data.json";
import { TRY_CLOTH } from "../types/DressingRoomType";

const modelList = [
  {
    id: "topcloth_1",
    type: "topclothes",
    imgSrc_jpg: "../assets/images/clothes/topcloth1_show.jpg",
    imgSrc_png: "../assets/images/clothes/topcloth1.png",
  },
  {
    id: "botcloth_1",
    type: "botclothes",
    imgSrc_jpg: "../assets/images/clothes/botcloth1_show.jpg",
    imgSrc_png: "../assets/images/clothes/botcloth1.png",
  },
  {
    id: "shoes_1",
    type: "shoes",
    imgSrc_jpg: "../assets/images/shoes/shoes1_show.jpg",
    imgSrc_png: "../assets/images/shoes/shoes1.png",
  },
  {
    id: "handbag_1",
    type: "handbags",
    imgSrc_jpg: "../assets/images/handbags/handbag1_show.jpg",
    imgSrc_png: "../assets/images/handbags/handbag1.png",
  },
  {
    id: "necklace_1",
    type: "necklaces",
    imgSrc_jpg: "../assets/images/necklaces/necklace1_show.jpg",
    imgSrc_png: "../assets/images/necklaces/necklace1.png",
  },
  {
    id: "hairstyle_1",
    type: "hairstyle",
    imgSrc_jpg: "../assets/images/hairstyle/hairstyle1_show.jpg",
    imgSrc_png: "../assets/images/hairstyle/hairstyle1.png",
  },
  {
    id: "background_1",
    type: "background",
    imgSrc_jpg: "../assets/images/background/background1_show.jpg",
    imgSrc_png: "../assets/images/background/background1.jpg",
  },
];
const initialState = { ...dataCloth, modelList };

export default (state = initialState, action) => {
  switch (action.type) {
    case TRY_CLOTH: {
      const modelListUpdate = [...state.modelList];
      const index = state.tabPanes.findIndex(
        (item) => item.id === action.tabPanesItem.id
      );
      if (index !== -1) {
        const indexModelList = state.modelList
          .map((e) => {
            return e.type;
          })
          .indexOf(action.tabPanesItem.type);
        modelListUpdate.splice(indexModelList, 1, action.tabPanesItem);
      }
      state.modelList = modelListUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
