function InputWithLabel({
                            elementId,
                            label,
                            onChange,
                            ref,
                            value
                        }) {


    return (
        <>
            <label htmlFor={elementId}>{label}</label>
            <input
                autoFocus={true}
                type="text"
                id={elementId}
                ref={ref}
                onChange={onChange}
                value={value}
            />
        </>
    )
}

export default InputWithLabel