const squadre = [
    {
        nome: "squadra1",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra2",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra3",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra4",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra5",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra6",
        punti: 0,
        falli: 0
    },

]

generateRandoms(squadre)
console.log('squadre', squadre)
let arrNomiFalli = squadre.map(s => ({
    nome: s.nome,
    falli: s.falli
}))

console.log('array nomi + falli', arrNomiFalli)

// FUNZIONI UTILIZZATE      

function generateRandoms(arr) {
    for (let team of arr) {
        team.punti = Math.floor(Math.random() * 30 + 10)
        team.falli = Math.floor(Math.random() * 5 + 1)
    }
}