class PromiseOfMyOwn {
    constructor(fn) {
        this.callbacks = [];
        fn(this.resolve.bind(this));
    }

    then(callback) {
        this.callbacks.push(callback);
        return this; // returning 'this' allows chaining of .then()
    }

    resolve(params) {
        setTimeout(() => {
            this.callbacks.forEach(callback => {
                callback(params);
            });
        }, 2000);
    }
}

const banakofunction = function () {
    return new PromiseOfMyOwn((resolve) => {
        // You don't need to pass any parameters to resolve here
        setTimeout(() => {
            resolve(); // Call the resolve function when the operation completes
        }, 2000);
    });
}

banakofunction().then(() => {
    console.log("Hello");
});
