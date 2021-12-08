Vue.component('products', {
    data() {
        return {
            filtered: [],
            products: []
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products/`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            })
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `<ul class="gallery_list">
                    <product class="gallery_item" v-for="item of filtered"
                    :key="item.id_product"
                    :img="item.img_product"
                    :product="item"
                    @add-product="$parent.$refs.countcart.addProduct">
                    </product>
                </ul>`
});

Vue.component('product', {
    props: ['product', 'img'],
    template: `<li class="gallery_item">
                    <article class="gallery_item_article">
                        <div class="gallery_item_top">
                            <a href="#" class="index_gallery">
                                <img :src="product.img_product" :alt="product.product_name">
                            </a>
                        </div>
                        <button class="gallery_product_btn" @click="$emit('add-product', product)"><img src="../../images/icons/white_basket.svg"
                        alt="корзина"> Add to Cart</button>
                        <div class="gallery_item_bot">
                            <a class="gallery_item_bot_link" href="#">
                                <span class="gallery_item_bot_caption">{{ product.product_name }}</span>
                            </a>
                            <span class="gallery_item_bot_desc">{{ product.product_desc }}</span>
                            <span class="gallery_item_bot_price">{{ product.price }}</span>
                        </div>
                     </article>
                </li>`
});