import axios from "axios"

const objetosAPI = axios.create({ baseURL: "http://localhost:3001/objetos" })

async function getObjetos() {
    const response = await objetosAPI.get('/')

    return response.data
}

async function getObjeto(id) {
    const response = await objetosAPI.get(`/${id}`)

    return response.data
}

async function postObjeto(objeto) {
    await objetosAPI.post(`/`, JSON.stringify(objeto),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
}


async function patchObjeto(id, objeto) {
    await objetosAPI.patch(`/${id}`, JSON.stringify(objeto),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
}


async function deleteObjeto(id) {
    await objetosAPI.delete(`/${id}`)
}

export {
    getObjetos,
    getObjeto,
    deleteObjeto,
    postObjeto,
    patchObjeto
}