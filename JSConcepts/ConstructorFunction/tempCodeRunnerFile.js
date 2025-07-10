let obj2 = {
    a: 10,
    foo: () => {
        hoo = () => {
            console.log(this);
        }
        hoo();

    }

}

obj2.foo();