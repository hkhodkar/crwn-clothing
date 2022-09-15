import clasess from './FormInput.module.scss'


const InputForm = ({ label, ...otherprops }) => {
    return (
        <div className={clasess.group}>
            <input className={clasess['form-input']} {...otherprops} />
            {
                label &&
                <label className={`${otherprops.value.length > 0 ? clasess.shrink : ''} ${clasess['form-input-label']}`} >{label}</label>
            }
        </div>
    )
}

export default InputForm;