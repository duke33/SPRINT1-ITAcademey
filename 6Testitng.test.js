const sumar = (n1, n2) => {
    return n1 + n2
}

const restar = (n1, n2) => {
    return n1 - n2
}

const dividir = (n1, n2) => {
    return n1 / n2
}

const multiplicar = (n1, n2) => {
    return n1 * n2
}
"---------------------------------------------"

describe('Operaciones matematicas', () => {
    test('sumar', () => {
        expect(sumar(11, 22)).toBe(33)
        expect(sumar(-11, 22)).toBe(11)
        expect(sumar(0, 22)).toBe(22)
    })
    test('restar', () => {
        expect(restar(33, 22)).toBe(11)
        expect(restar(-11, 22)).toBe(-33)
        expect(restar(0, 22)).toBe(-22)
    })
    test('dividir', () => {
        expect(dividir(20, 10)).toBe(2)
        expect(dividir(-20, -10)).toBe(2)
        expect(dividir(22, 0)).toBe(Infinity)
    })
    test('multiplicar', () => {
        expect(multiplicar(20, 0)).toBe(0)
        expect(multiplicar(-20, -10)).toBe(200)
        expect(multiplicar(4, 3)).toBe(12)
    })

})