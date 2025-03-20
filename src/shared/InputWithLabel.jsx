function InputWithLabel({lelementId, label, onChange, ref, value}) {


    return (
        <>
            <label htmlFor={lelementId}>{label}</label>
            <input
                autoFocus={true}
                type="text"
                id={lelementId}
                ref={ref}
                onChange={onChange}
                value={value}
            />
        </>
    )
}

export default InputWithLabel