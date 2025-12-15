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

let peso = arrBici[0].peso
for (let bici of arrBici) {
    if (bici.peso < peso) {
        peso = bici.peso
        
    }
}

let pesoMinore = arrBici.find(b => b.peso === peso)
console.log(
            'bici con peso minore: %c' + pesoMinore.nome + '%c, pesa %c' + pesoMinore.peso,
            'color: green; font-weight: bold;',
            '',
            'color: red; font-weight: bold;'
        )