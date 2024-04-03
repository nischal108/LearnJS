class PromiseOfMyOwn {
    constructor(fn) {
        this.callbacks = [];
        fn(this.resolve.bind(this));
    }

    then(callback) {
        this.callbacks.push(callback);
        return this; 
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
        setTimeout(() => {
            resolve(); 
        }, 2000);
    });
}

banakofunction().then(() => {
    console.log("Hello");
});
