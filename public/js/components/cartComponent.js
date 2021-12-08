Vue.component('cart', {
    data() {
        return {
            cartItems: [],
            discount: 0
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
        sumProducts() {
            let sum = 0;
            for (let item of this.cartItems) {
                sum += (item.quantity * item.price);
            }
            return sum;
        },
        remove(product) {
            if (product.quantity > 1) {
                this.$parent.putJson(`/api/cart/${product.id_product}`, { quantity: -1 })
                    .then(data => {
                        if (data.result) {
                            product.quantity--;
                        }
                    })
            } else {
                this.$parent.deleteJson(`/api/cart`, product)
                    .then(data => {
                        if (data.result) {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
                        } else {
                            console.log('error');
                        }
                    })
            }
        }
    },
    template: `<div class="cart_wrap">
                    
                    <div class="cart_left">
                        <h1 v-if="cartItems.length == 0">Cart is empty!</h1>
                        <cart-item v-for="item of cartItems" :key="item.id_product" :product="item" @delete-product="remove">
                        </cart-item>
                        <div class="cart_left_btn_box">
                                <button class="cart_left_btn clear">clear shopping cart</button>
                                <button class="cart_left_btn continue">continue shopping</button>
                        </div>
                    </div>
                    <div class="cart_right">
                        <span class="cart_right_title">shipping adress</span>
                        <form class="cart_right_form" action="#" method="POST">
                            <input class="cart_right_form_country cart_right_form_input" type="text"
                                placeholder="Bangladesh">
                            <input class="cart_right_form_state cart_right_form_input" type="text"
                                placeholder="State">
                            <input class="cart_right_form_postcode cart_right_form_input" type="text"
                                placeholder="Postcode / Zip">
                            <button class="cart_right_form_btn">get a quote</button>
                            <div class="cart_right_form_total_info">
                                <span class="cart_right_form_total_info_sub">sub total <span> {{ sumProducts() }}</span></span>
                                <span class="cart_right_form_total_info_grand">grand total <span>{{ sumProducts() - this.discount }}</span></span>
                                <hr class="cart_right_form_total_info_hr" />
                                <input class="cart_right_form_total_info_submit" type="submit"
                                    value="proceed to checkout">
                            </div>
                        </form>
                    </div>
                </div>`
});

Vue.component('cart-item', {
    props: ['product'],
    template: `<article class="cart_left_product">
                    <div class="cart_left_product_img">
                        <img :src="product.img_product" alt="product.product_name">
                    </div>
                    <div class="cart_left_product_desc">
                        <p class="cart_left_product_title cart_name">{{ product.product_name }}</p>
                        <p class="cart_left_product_title cart_type">{{ product.product_type }}</p>
                        <p class="cart_left_product_info cart_price">Price: <span>{{ product.price }}</span></p>
                        <p class="cart_left_product_info cart_color">Color: <span>{{ product.product_color }}</span></p>
                        <p class="cart_left_product_info cart_size">Size: <span>{{ product.product_size }}</span></p>
                        <p class="cart_left_product_info cart_quantity">Quantity: <input
                                class="cart_quantity_value" type="text" :placeholder="product.quantity"></p>
                    </div>
                    <button class="cart_left_product_close" @click="$emit('delete-product', product)"></button>
                </article>`
});