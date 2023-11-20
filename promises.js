let promise = new Promise((durga, nani)=> {
    const x = "surya";
    const y = "surya"
    if (x === y) {
        durga();
    } else {
        nani();
    }
});
 
promise.
    then(function () {
        console.log('hi , guys');
    })
    .catch(function () {
        console.log('you are not in class');
    });