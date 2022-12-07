
export const Filter = ({ value, change }) => {
    return (<div>
        <p>Find contact</p>
        <input value={value} onChange={(e) => change(e.target.value)}></input>
    </div>)
}