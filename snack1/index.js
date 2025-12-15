const arrBici = [
    {
        nome: "mountainbike",
        peso: 20
    },
    {
        nome: "freestyle",
        peso: 15
    },
    {
        nome: "triciclo",
        peso: 5
    },
    {
        nome: "monociclo",
        peso: 10
    },
]

let lightBici = arrBici[0]
for (let bici of arrBici) {
    if (bici.peso < lightBici.peso) {
        lightBici = bici
        
    }
}

console.log(
            'bici con peso minore: %c' + lightBici.nome + '%c, pesa %c' + lightBici.peso,
            'color: green; font-weight: bold;',
            '',
            'color: red; font-weight: bold;'
        )