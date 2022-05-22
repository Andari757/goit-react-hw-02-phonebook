import ListItem from "./ListItem/ListItem"
export default function ContactList({ contacts, onClick }) {
    return (
        <ul>
            <ListItem
                contacts={contacts}
                onClick={onClick}
            />
        </ul>
    )
}