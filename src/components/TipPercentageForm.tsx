const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}

export const TipPercentageForm = ({setTip, tip}: TipPercentageFormProps ) => {
  return (
    <div>
        <h3 className=" font-black text-2xl mb-3">Propinas:</h3>
        <form className="flex justify-evenly">
            {tipOptions.map((tipOption) => (
                <div 
                    key={tipOption.id}
                    className=" flex gap-2 border rounded-md p-2 m-3 bg-slate-400"
                >
                  <label className=" text-white" htmlFor={tipOption.id}>{tipOption.label}</label>
                  <input 
                      id={tipOption.id} 
                      type="radio" 
                      name="tip"
                      value={tipOption.value}
                      onChange={(e) => setTip(+e.target.value) }
                      checked={tipOption.value === tip}
                  />
                </div>
            ))}
        </form>
    </div>
  )
}
