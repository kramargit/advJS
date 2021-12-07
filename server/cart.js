let add = (cart, req) => {
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4);
};

let change = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
};

let del = (cart, req) => {
    const newContents = [];
    cart.contents.forEach((good) => {
        if (good.id_product === req.body.id_product) {
            if (good.quantity !== 1) {
                good.quantity -= 1;
                newContents.push(good);
            }
        } else newContents.push(good);
    });
    cart.contents = newContents;
    return JSON.stringify(cart, null, 4);
};

module.exports = { add, change, del };