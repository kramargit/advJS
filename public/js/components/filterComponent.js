Vue.component('search-form', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `<form action="#" class="search_form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                    <input class="search_form_input" id="search" type="search" placeholder="Search ..." v-model="userSearch">
                    <label for="search" class="search_form_label"></label>
                </form>`
});