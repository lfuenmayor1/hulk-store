export const ErrorMsg =  ({ message="Error" }) => {
  return (
    <div className="alert bg-danger" role="alert" id="message-text">
         {message}
    </div>
  )
}
