import { useLocalStorage } from "../hooks/useLocalStorage";
function Form() {

    const [name, setName] = useLocalStorage("name", "");
    const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");
    return (
      <>
      <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
        <form style={{ display: "flex", flexDirection: "column", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <label htmlFor="name">Name:</label>
            <input type="text" data-testid={"name"} value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="serviceNumber">Service Number:</label>
            <input type="text" data-testid={"serviceNumber"} value={serviceNumber} onChange={(e) => setServiceNumber(e.target.value)} />

        </form>
      </>
    );
}

export default Form