 const Title = ({ type, children }) => {
    return (
        <>
            {type === 'primary' ? <h1>{children}</h1> : <h2>{children}</h2>}
        </>
    );
}

export default Title;