export default function Input({ value }) {

    return (
        <input id="codeInput" name="codeInput" className="w-full h-20 rounded-4xl uppercase text-orange px-5 font-bold text-4xl outline-none" value={value} readOnly />
    )
}