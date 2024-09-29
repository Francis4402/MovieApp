

export default function TextInput({ string, inputType, placeholder, error, onUpdate }) {

  return (
    <>
        <input 
            placeholder={placeholder}
            className="py-3 px-4 block w-full bg-transparent border-b border-t border-gray-600 focus:outline-none rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none" 
            value={string || ''}
            onChange={(event) => onUpdate(event.target.value)}
            type={inputType}
            autoComplete="off"
        />

        <div className="text-red-500 text-[14px] font-semibold">
            {error ? (error) : null}
        </div>
    </>
  )
}