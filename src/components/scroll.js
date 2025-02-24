function Scroll(props) {
    return (
        <div style={{height: "100vh", overflowY: "scroll", "scrollbar-width": "none"}}>
            {props.children}
        </div>
    );
}

export default Scroll;