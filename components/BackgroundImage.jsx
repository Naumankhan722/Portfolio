export default function BackgroundImage({ children }) {
    const style = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        opacity: 0.8,
        zIndex: -1,
        backgroundImage: 'linear-gradient(185deg, #9fcff9 0%, #C6E4EE 40%, #FED1AE 60%, #FAA0B9 70%, #CB7DCB 80%, #757ECB 100%)'
    }


    return (
        <div style={style}>
            {children}
        </div>
    )
}