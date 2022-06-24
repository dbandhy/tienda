function Seleccionar ({ opciones, onSelect, defaultOpcion}) {
    return opciones.map (o => (<>
    <input onChange={(e) => {
        onSelect(o.value)
    }}
    type="radio"
    name="endulzante"
    checked={defaultOpcion === o.value}
    id={o.value}
    />

    <label for={o.value}>{o.text}</label>
    
    </>));
}

export default function Seleccionar() {
    const [opcion, setOpcion] = useState(1);
    const opciones = [{ value: 1, text: "edulcorante"}, { value: 2, text: "azúcar"}];

    function opcionSeleccionada(value) {
       setOpcion(value) 
    }
}

