const ENDPOINT = 'http://localhost:3001'

export default function register ({ usuario, contraseña}) {
    console.log(usuario)
    console.log(contraseña)
    return fetch('http://localhost:3001/usuarios', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({usuario, contraseña})
    }).then(res => {
        console.log(res)
        return res.json()
    }).then(res => {
        console.log(res)
    })
}