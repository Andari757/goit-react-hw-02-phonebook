import PropTypes from 'prop-types';
export default function Filter({ onChange, value }) {

    return (<div>
        <label htmlFor="filter">Find contacts by name</label>
        <br />
        <input onChange={onChange} type="text" name="filter" id="filter" value={value} />
    </div>)
}
Filter.defaultProps = {
    onChange: function () { },
    value: ""
}
Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}