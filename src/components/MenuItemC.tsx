import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export const MenuItemC = ({item, addItem}: MenuItemProps) => {
  return (
    <button 
      className=" border-2 border-blue-200 w-full p-3 flex justify-between rounded-md hover:bg-sky-600 hover:text-white"
      onClick={() => addItem(item)}
    >
    <p>{item.name}</p>
    <p className=" font-black">$ {item.price} </p>
    </button>
  )
}


