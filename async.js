// Penulisan Asynchronous JavaScript

const getUser = (id, callback) => {
    const time = id === 1 ? 10000 : 5000
    setTimeout(() => {
        const nama = id === 1 ? "Rifa'i" : "Putri"
        callback({id, nama})
    }, time);
}

const userSatu = getUser(1, (hasil) => {
    console.log(hasil)
})

const userDua = getUser(2, (hasil) => {
    console.log(hasil)
})

const panggil = "haii"
console.log(panggil)