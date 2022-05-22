import ListItem from "./ListItem/ListItem"
import PropTypes from 'prop-types';
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
ContactList.defaultProps = {
    onClick: function () { },
    contacts: []
}
ContactList.propTypes = {
    onClick: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }))
}