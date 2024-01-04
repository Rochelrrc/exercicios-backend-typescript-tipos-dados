const users02 = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]


function filtrarUsuario(lista:
    {
        nome: string,
        idade: number,
        status: boolean
    }[]
    , usuario: string): { nome: string, idade: number, status: boolean }[] {

    const resultado = lista.filter((user) => {
        return user.nome.toLowerCase().includes(usuario.toLowerCase())
    });

    return resultado;
}


console.log(filtrarUsuario(users02, 'a'))