import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

export const OrderTotals = ({order, tip, placeOrder}: OrderTotalProps) => {
    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price ), 0 ), [order] )
    const tipAmount = useMemo(() => subTotalAmount * tip , [tip, order])
    const totalAmount = useMemo(() => subTotalAmount + tipAmount , [tip, order])
  return (
    <>
        <div className=" space-y-3">
            <h2 className=" font-black text-2xl">Totales y Propinas</h2>
            <p>Subtotal a pagar: {''}
                <span className=" font-bold">{formatCurrency(subTotalAmount)} </span>
            </p>
            <p>Propina: {''}
                <span className=" font-bold"> {formatCurrency(tipAmount)} </span>
            </p>
            <p>Total a pagar: {''}
                <span className=" font-bold"> {formatCurrency(totalAmount)} </span>
            </p>
        </div>
        <button
            className=" bg-black text-white font-bold uppercase w-full p-3 mt-10 rounded-lg hover:bg-blue-500 disabled:opacity-10 disabled:hover:bg-black"
            disabled={ totalAmount === 0 }
            onClick={() => placeOrder()}
        >
            Guardar Orden
        </button>
    </>
  )
}
