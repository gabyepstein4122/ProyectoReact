import productos from './baseDatos.js'
const delay = 2000


const mockFetch = (id) => new Promise((res) => { 
    setTimeout(()=>{
        res(id ? productos.find(producto => producto.id === id) : productos)
    }, delay)
})


export default mockFetch

