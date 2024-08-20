let username = prompt("Как вас зовут?").toLocaleLowerCase().trim()
let random = Math.random()*10
let float = parseInt(random)
console.log(float);


if (username[0] == "a") {
    let age = +prompt("Сколько вам лет?").trim()
    if (age >=20 && age <=40) {
        let money = +prompt("Сколько у вас деньжат?").trim()
        if (money >=300) {
            let people = +prompt("Сколько с вами людей?")
            if (people <= random) {
                alert("Добро пожаловать в бойцовский клуб!")
            } else {
                alert("Просим прощения но мест в клубе недостаточно!")
            }
        } else {
            alert("Подзаработайте деньжат!")
        }
    } else {
        alert("Вон!!")
    }
} else {
    alert("У вас неподходящее имя!!")
}

