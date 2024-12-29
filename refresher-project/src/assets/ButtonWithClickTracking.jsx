const withClickTracking = (Comp) => {
    return (props) => {
        const handleClick = () => {
            console.log('Button clicked', props.trackingInfo);
        };

        return (
            <div onClick={handleClick}>
                <Comp {...props} />
            </div>
        )
    }
}

export default withClickTracking;