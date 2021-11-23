type GreepProps = {
    name: string | number,
    messageCount?:number | string ,
    isLoggedIn?:boolean
}


const Greet = (props : GreepProps) => {
    const { messageCount = 0 ?? 10} = props
    return (
        <div>
            <h2>{ props.isLoggedIn 
            ? `Bonjour ${props.name} tu as ${messageCount} ans` 
            : `Bonjour invité`}</h2>
        </div>
    )
}



export default Greet
