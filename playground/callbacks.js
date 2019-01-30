const fun = (id, callback) => {
    let obj = {
        id: id,
        name: "Arko"
    }
    console.log("normal function");
    callback(obj);
};

fun(12, (obj) => {
    console.log(obj);
});



