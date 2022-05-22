export default function ListItem({ contacts, onClick }) {
    return (
        contacts.map((e) => <li key={e.id}>{e.name}   -   {e.number} <button onClick={() => { onClick(e.name) }} >Delete</button></li>)
    )
}