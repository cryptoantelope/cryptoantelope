import React from 'react'

const Footer = () => {
    return <footer className="container" style={styles.container}>
        made with <i className="fas fa-heart" style={styles.heart}></i> in my <i className="fas fa-home"></i>
    </footer>
}

const styles = {
    container: {
        padding: '.6rem 0',
        textAlign: 'center'
    },
    heart: {
        color: '#e25555'
    }
}

export default Footer