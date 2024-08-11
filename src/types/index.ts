export type MenuItem ={
    id: number,
    name: string,
    price: number,
    imagen: string
}

export type OrderItem = MenuItem & {
    quantity: number
}