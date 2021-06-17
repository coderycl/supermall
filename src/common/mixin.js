// import {POP, NEW, SELL} from "./const";
import {debouce} from './utils';

export const itemListenerMixin = {
  data() {
    return {
      itemImgListenter: null
    }
  },
  mounted() {
    let refresh =  debouce(this.$refs.scroll.refresh, 100)

    this.itemImgListenter = () => {
      refresh()
    }

    this.$bus.$on('itemImgLoad', this.itemImgListenter)
  }
}

// export const backTopMixin = {
//   data: function () {
//     return {
//       showBackTop: false
//     }
//   },
//   methods: {
//     backTop: function () {
//       this.$refs.scroll.scrollTo(0, 0, 300);
//     }
//   }
// }

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
