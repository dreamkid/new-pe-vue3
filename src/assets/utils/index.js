export class Scroll {
    constructor(options) {
        this.$el = document.querySelector(options.el);
        this.$wrap = this.$el.querySelector(options.wrap);
        this.$item = this.$wrap.querySelector(options.item);
        this.$items = this.$wrap.querySelectorAll(options.item);
        this.direction = options.direction || 'x';
        this.$gap = this.gap || 10;
        this.$wrapStyle = {
            paddingValue: {
                top: 0,
                left: 20,
                bottom: 0,
                right: 20
            },
            get padding() {
                const { top, bottom, left, right } = this.paddingValue;
                return `${ top }px ${ right }px ${ bottom }px ${ left }px`;
            }
        }
    }

    get itemDOM() {
        let { offsetWidth } = this.$item;
        return {
            width: offsetWidth,
        }
    }

    init() {
        this.$el.style.cssText = `
            overflow: scroll;
        `

        this.$wrap.style.cssText = `
            overflow-x: scroll;
            padding:${ this.$wrapStyle.padding };
            box-sizing:border-box;
            width:${this.$items.length * this.itemDOM.width + ((this.$items.length-1) * this.$gap) + this.$wrapStyle.paddingValue.left + this.$wrapStyle.paddingValue.right}px;
        `

        this.$items.forEach((el, index) => {
            el.style.cssText = `
                float:left;
                margin-right:${ (this.$items.length - 1) == index ? 0 : this.$gap }px;
            `
        })

    }
}
// export default {
//     data() {
//         return {

//         }
//     },
//     mounted() {
//         this.$nextTick(() => {
//             let scroll = new Scroll({
//                 el: '.list',
//                 wrap: '.list-wrap',
//                 item: '.item'
//             })

//             scroll.init();
//         })
//     }
// }