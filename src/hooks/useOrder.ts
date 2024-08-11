import { useState } from "react";
import { MenuItem, OrderItem } from "../types";
import Swal from "sweetalert2";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    //console.log('agregando', item);
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      //console.log('ya existe');
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };
  //console.log(order);

  const removeItem = (id: MenuItem["id"]) => {
    Swal.fire({
      title: "Deseas eliminar la orden?",
      text: "De ser eliminada no se podra mostrar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //console.log("Eliminando..... ", id);
        setOrder(order.filter((item) => item.id !== id ))

        Swal.fire({
          title: "Eliminado!",
          text: "Se ha eliminado la orden " + id,
          icon: "success",
        });
      }
    });    
  };

  const placeOrder = () => {
    //console.log('Guardando....');
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Su orden se ha guardado",
        showConfirmButton: false,
        timer: 1500
      });
    setOrder([]), setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
  };
}
