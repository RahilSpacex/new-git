let menu = {
  width: 2000,
  height: 3000,
  shit: 600,
  title: "My menu "
};

function multiplyNumeric(obj) {
    for (const name in obj) {
        if (typeof obj[name] === Number) {
            obj[name] = obj[name] * 2
            console.log(obj[name])
        } 
    }
}
multiplyNumeric(menu)

