import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderItemProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export const OrderContents = ({order, removeItem}: OrderItemProps) => {
  return (
    <div>
        <h2 className=' font-black text-4xl'>Consumo</h2>
        <div className=" space-y-3  mt-10">
            {order.map(item => (
                    <div 
                        className=" flex justify-between items-center border-t py-5 last-of-type:border-b"
                        key={item.id}
                    >
                        <div>
                            <p className=" text-lg">{item.name} - {formatCurrency(item.price)}</p>
                            <p className=" font-black">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)} </p>
                        </div>

                        <button 
                            className=" bg-red-700 h-8 w-8 rounded-full text-white font-black"
                            onClick={()=> removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
