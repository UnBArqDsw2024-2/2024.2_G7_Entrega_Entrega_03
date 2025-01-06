export interface AddressInterface{
    id: number
    cep: string,
    rua: string,
    cidade: string,
    estado: string
}

export interface AddressBody{
    cep: string,
    rua: string,
    cidade: string,
    estado: string
}   