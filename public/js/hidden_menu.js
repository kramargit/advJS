function openMenu(event) {
    let hidd_menu = document.querySelector('.hidden_menu');
    hidd_menu.style.display = 'block';
}

function closeMenu(event) {
    let hidd_menu = document.querySelector('.hidden_menu');
    hidd_menu.style.display = 'none';
}

function catalogFilter(event) {
    let hidd_search_area = document.querySelector('.filter_category_hid_block');
    if (hidd_search_area.style.display == 'block') {
        hidd_search_area.style.display = 'none';
    }
    else {
        hidd_search_area.style.display = 'block';
    }
}

function catalogBrand(event) {
    let hidd_search_area = document.querySelector('.filter_brand_hid_block');
    if (hidd_search_area.style.display == 'block') {
        hidd_search_area.style.display = 'none';
    }
    else {
        hidd_search_area.style.display = 'block';
    }
}

function catalogDesigner(event) {
    let hidd_search_area = document.querySelector('.filter_designer_hid_block');
    if (hidd_search_area.style.display == 'block') {
        hidd_search_area.style.display = 'none';
    }
    else {
        hidd_search_area.style.display = 'block';
    }
}

function openHiddenFilter(event) {
    let hidd_search_area = document.querySelector('.catalog_filter_hid_block');
    hidd_search_area.style.display = 'block';
}

function closeHiddenFilter(event) {
    let hidd_search_area = document.querySelector('.catalog_filter_hid_block');
    hidd_search_area.style.display = 'none';
}

function showTrendingArea(event) {
    let hidd_search_area = document.querySelector('.catalog_trending_hid_block');
    if (hidd_search_area.style.display == 'block') {
        hidd_search_area.style.display = 'none';
    }
    else {
        hidd_search_area.style.display = 'block';
    }
}

function showSizeArea(event) {
    let hidd_search_area = document.querySelector('.catalog_size_hid_block');
    if (hidd_search_area.style.display == 'block') {
        hidd_search_area.style.display = 'none';
    }
    else {
        hidd_search_area.style.display = 'block';
    }
}

function showPriceArea(event) {
    let hidd_search_area = document.querySelector('.catalog_price_hid_block');
    if (hidd_search_area.style.display == 'block') {
        hidd_search_area.style.display = 'none';
    }
    else {
        hidd_search_area.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function (event) {
    let btn_click = document.querySelector('.header_right_menu');
    let close_hidden_btn = document.querySelector('.hidden_menu_close_btn');
    let catalog_btn_filter = document.querySelector('.filter_category');
    let catalog_btn_brand = document.querySelector('.filter_brand');
    let catalog_btn_designer = document.querySelector('.filter_designer');
    let black_filter = document.querySelector('.catalog_filter');
    let red_filter = document.querySelector('.catalog_filter_red');
    let btn_trending = document.querySelector('.catalog_filter_settings_trend_title');
    let btn_size = document.querySelector('.catalog_filter_settings_size_title');
    let btn_price = document.querySelector('.catalog_filter_settings_price_title');
    btn_click.addEventListener('click', openMenu);
    close_hidden_btn.addEventListener('click', closeMenu);
    catalog_btn_filter.addEventListener('click', catalogFilter);
    catalog_btn_brand.addEventListener('click', catalogBrand);
    catalog_btn_designer.addEventListener('click', catalogDesigner);
    black_filter.addEventListener('click', openHiddenFilter);
    red_filter.addEventListener('click', closeHiddenFilter);
    btn_trending.addEventListener('click', showTrendingArea);
    btn_size.addEventListener('click', showSizeArea);
    btn_price.addEventListener('click', showPriceArea);
});