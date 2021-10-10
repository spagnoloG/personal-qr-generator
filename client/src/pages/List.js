export const List = (props) => {
    return(
    <div>
        <h1>
            List of generated qr codes
        </h1>
        <h2>{props.user ? props.user.name : "idk"}</h2>
    </div>
    );
}
