import propTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd}) => {
    
    return (
        <header className="header">
           <h2> {title ='LiLi'}</h2> 
           < Button  color='green' text='Add' onClick={onAdd} />
        </header>
    )
}

Header.defaultProps={
    title: 'wissem',
}
Header.propTypes={
    title: propTypes.string.isRequired,
}
export default Header
