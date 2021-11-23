import { Name } from './Person.types';



type PersonListProps = {
      names:Name[]
}

const PersonList = (props: PersonListProps) => {
    return (
        <div>
           {props.names.map((names,index) => {
               return (
                   <h2 key={index}>{names.first} {names.last}</h2>
               )
           })}
        </div>
    )
}

export default PersonList
