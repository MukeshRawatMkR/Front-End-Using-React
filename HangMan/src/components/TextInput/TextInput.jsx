function TextInput({type = "text",onChangeHandler, label, placeholder="Enter your input here..."}){
return(
    <label>
    <span className="text-gray-600" >{label}</span>
    <input 
    type ={type} 
    className="px-4 py-2 border border-gray-500 rounded-md w-full"
    placeholder={placeholder}
    // value={value}
    onChange={onChangeHandler}
    />
</label>

);
}
export default TextInput;