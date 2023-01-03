export const HandlerException = (errorCode: number) => {
    switch (errorCode){
        case 404: {
            alert('XDA No encontrado')
            break
        }
        case 409: {
            alert('La solicitud no se ha podido procesar')
            break
        }
        case 500: {
            alert('Ha ocurrido un error')
            break
        }
    }
}