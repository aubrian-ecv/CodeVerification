export default function Button({ value, onClick, inverted }) {
    return (
        <button
            className={`rounded-full border-2 uppercase px-5 py-3 font-bold lg:w-1/4 w-full border-orange ${inverted ? 'bg-orange text-white' : 'bg-white text-orange'}`}
            onClick={onClick}
        >
            {value}
        </button>
    )
}