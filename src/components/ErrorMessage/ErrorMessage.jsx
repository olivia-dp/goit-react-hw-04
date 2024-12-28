import s from "./ErrorMessage.module.css"

const ErrorMessage = () => {
   return (<h2 className={s.error}>Something went wrong! Try again...</h2>)
}

export default ErrorMessage;