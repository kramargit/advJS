class Valid {
    constructor(e) {
        this.e = e;
        this.name();
        this.telephone();
        this.email();
    }

    name() {
        let str = document.querySelector('.name').value;
        let rule = /[a-zA-zа-яА-я]/ig;
        if (str.match(rule) == null) {
            this.e.preventDefault();
            let name = document.querySelector('.name');
            name.style.borderColor = 'red';
            name.style.outline = 'red';
            name.style.borderRadius = '3px';
        }
    }

    telephone() {
        let str = document.querySelector('.tele').value;
        let rule = /^\+?7\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/g;
        if (str.match(rule) == null) {
            this.e.preventDefault();
            let name = document.querySelector('.tele');
            name.style.borderColor = 'red';
            name.style.outline = 'red';
            name.style.borderRadius = '3px';
        }
    }

    email() {
        let str = document.querySelector('.E').value;
        let rule = /^[a-zа-я0-9._-]+@[a-z0-9-_]+\.[a-z0-9-_]{2,4}/ig;
        if (str.match(rule) == null) {
            this.e.preventDefault();
            let name = document.querySelector('.E');
            name.style.borderColor = 'red';
            name.style.outline = 'red';
            name.style.borderRadius = '3px';
        }
    }
}

let btn = document.querySelector('.btn-send');
btn.addEventListener('click', (e) => {
    let obj = new Valid(e);
});
