import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { menuItems } from './data/db';
import { MenuItemC } from './components/MenuItemC';
import useOrder from './hooks/useOrder';
import { OrderContents } from './components/OrderContents';
import { OrderTotals } from './components/OrderTotals';
import { TipPercentageForm } from './components/TipPercentageForm';

function App() {
 
  //console.log(menuItems);
  const {order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()


  return (
    <div className=' bg-gray-100'>
      <header className=' bg-blue-500 py-6'>
        <div className=" flex justify-center">    
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <h1 className=' text-3xl text-white text-center m-3 uppercase font-serif'>Calculadora de Propinas y Consumo</h1>
          <img src={reactLogo} className="logo react" alt="React logo" /> 
        </div>
      </header>

      <main className=' max-w-7xl py-12 grid md:grid-cols-2'>
        <div className=' p-5'>
          <h2 className=' text-4xl font-black'>Menu</h2>
          <div className=' space-y-3 mt-10'>
            {menuItems.map(item =>(
              <MenuItemC
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className=' border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
          {order.length ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />

              <TipPercentageForm          
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />          
            </>
            ) : 
            <p className=" text-center">La orden esta vacia</p>
          }
          
        </div>
      </main>
      
    </div>
  )
}

export default App
