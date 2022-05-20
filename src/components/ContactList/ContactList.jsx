import ListItem from "./ListItem/ListItem"
export default function ContactList({ contacts }) {
    return (
        <ul>
            <ListItem
                contacts={contacts}
            />
        </ul>
    )
}