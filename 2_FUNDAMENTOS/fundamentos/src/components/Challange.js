const Challange = () => {
    const a = 10;
    const b = 50;

    const soma = () => {
        return <div>{console.log(a+b)}</div>
    }

    return (
        <div>
            <h1>{a}</h1>
            <h1>{b}</h1>
            <button onClick={soma}>Faça a soma</button>
        </div>
    )

}

export default Challange;