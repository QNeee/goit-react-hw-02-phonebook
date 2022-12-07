import { nanoid } from 'nanoid'

export const ContactList = ({ options, deleteContact }) => {
    return (<ul>
        {options.map(item => <li id={item.id} key={nanoid()}>{item.name}:{item.number}<button key={nanoid()} type="button" onClick={() => deleteContact(item.id)}>Delete</button></li>)}
    </ul>)
}