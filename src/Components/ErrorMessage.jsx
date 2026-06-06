import css from  './ErrorMessage.module.css'
const ErrorMessage=({todoItems1})=>{
    return <>
        {todoItems1.length==0 && <h2 className={`${css.h2}`}>Enjoy Your Day</h2>}
    </>
}
export default ErrorMessage;