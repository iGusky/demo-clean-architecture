export const HandlerSuccess = (successCode: number) => {
    switch (successCode){
        case 203: {
            alert('No se tiene permiso de realizar esa acción')
            break
        }
        case 204: {
            alert('No se encontró el contenido')
            break
        }
    }
}