export default function BackgroundImage({ children }) {
    const style = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.8,
        zIndex: -1,
        backgroundImage: 'linear-gradient(185deg, #9fcff9, #C6E4EE, #FED1AE, #FAA0B9, #CB7DCB, #757ECB)',
        backgroundSize: '400% 400%',
        animation: 'waveGradient 12s ease-in-out infinite'
    }


    return (
        <div style={style}>
            {children}
        </div>
    )
}