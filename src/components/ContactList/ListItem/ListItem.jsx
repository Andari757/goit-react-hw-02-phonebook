export default function ListItem({ contacts }) {
    return (
        contacts.map((e) => <li key={e.id}>{e.name}   -   {e.number}</li>)
    )
}