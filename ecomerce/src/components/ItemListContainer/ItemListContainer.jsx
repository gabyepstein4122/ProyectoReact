
const ItemListContainer = (props) => {
    //eslint-disable-next-line react/prop-types
    const {greeting} = props
    return(
        <>
            <h1>{greeting}</h1>
        </>
    )
}

export default ItemListContainer