Vue.component('countcart', {
    data() {
        return {
            cartItems: []
        }
    },
    mounted() {
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents) {
                    this.$data.cartItems.push(item);
                }
            })

    },
    methods: {
        addProduct(item) {
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
                    .then(data => {
                        if (data.result === 1) {
                            find.quantity++
                        }
                    })
            } else {
                const prod = Object.assign({ quantity: 1 }, item);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod)
                        }
                    })
            }
        },
        quantity() {
            let quan = 0;
            for (let item of this.cartItems) {
                quan += item.quantity;
            }
            return quan;
        }
    },
    template: `<a class="reference_header_right_cart" href="cart.html">
                <countcart-item></countcart-item>
                </a>`
});

Vue.component('countcart-item', {
    template: `<div class="header_right_cart">
                    <img class="header_right_cart_img" src="images/icons/basket_icon.svg" alt="корзина">
                    <div class="header_right_cart_counter">
                        <span>{{ $parent.quantity() }}</span>    
                    </div>
                </div>`
});