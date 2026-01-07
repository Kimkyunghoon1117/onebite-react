
const CurrenyInput = ({text, v, onChange}) => {

    return (
        <div>
            <label>{text}:</label>
            <input type="number" value={v} 
            onChange={(e) => {onChange(Number(e.target.value))}}></input>
        </div>
    );
    
};

export default CurrenyInput;