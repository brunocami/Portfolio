export default function validateInfo(values) {
    let errors = {}

    if(!values.name.trim()) {
        errors.username = "Ingrese su Nombre"
    }

    if(!values.email){
        errors.email = "Ingrese su Email"
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Direccion de Email no valida"
    }

    return errors
}