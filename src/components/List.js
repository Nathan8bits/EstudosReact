import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1999}/>
                <Item marca="Fiat" />
                <Item />
            </ul>
        </>
    )
}

export default List