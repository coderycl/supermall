// import {POP, NEW, SELL} from "./const";
import {debouce} from './utils';

export const itemListenerMixin = {
  data() {
    return {
      itemImgListenter: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh =  debouce(this.$refs.scroll.refresh, 100)

    this.itemImgListenter = () => {
      this.refresh()
    }

    this.$bus.$on('itemImageLoad', this.itemImgListenter)
  }
}

export const backTopMixin = {
  data: function () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    btnClick: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}

// export const tabControlMixin = {
//   data: function () {
//     return {
//       currentType: POP
//     }
//   },
//   methods: {
//     tabClick(index) {
//       switch (index) {
//         case 0:
//           this.currentType = POP
//           break
//         case 1:
//           this.currentType = NEW
//           break
//         case 2:
//           this.currentType = SELL
//           break
//       }
//       console.log(this.currentType);
//     }
//   }
// }
