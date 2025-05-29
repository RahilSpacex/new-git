let menu = {
  width: 2000,
  height: 300,
  shit: 600,
  title: "My menu"
};

function multiplyNumeric(obj) {
    for (const key in obj) {
        if (typeof obj[key] === Number) {
            obj[key] = obj[key] * 2
            console.log(obj[key])
        } 
    }
}
multiplyNumeric(menu)

