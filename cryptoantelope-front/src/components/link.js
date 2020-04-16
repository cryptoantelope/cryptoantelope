import React from 'react'

const Link = params => {
    const {children, to, type} = params

    if(type === 'web')
        return <a href={to} rel="nofollow noopener" >{children? children:<i className="fas fa-external-link-alt"></i>}</a>
    if(type === 'twitter')
        return <a href={to} rel="nofollow noopener" style={styles.twitter}><i className="fab fa-twitter"></i></a>
    if(type === 'facebook')
        return <a href={to} rel="nofollow noopener" style={styles.facebook}><i className="fab fa-facebook"></i></a>
    if(type === 'instagram')
        return <a href={to} rel="nofollow noopener" style={styles.instagram}><i className="fab fa-instagram"></i></a>
    if(type === 'reddit')
        return <a href={to} rel="nofollow noopener" style={styles.reddit}><i className="fab fa-reddit"></i></a>
    return ''
}

const styles = {
    facebook: {
        color: '#4267b2'
    },
    instagram: {
        display: 'inline-block',
        //width: '1rem',
        padding: '0 .1rem',
        //height: '0.9rem',
        textAlign: 'center',
        borderRadius: '3px',
        color: '#fff',
        //fontSize: '220px',
        lineHeight: '0.8rem',
        //verticalAlign: 'middle',
        //background: '#d6249f',
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
        
    },
    reddit: {
        color: '#FF4500'
    },
    twitter: {
        color: '#00acee'
    }
}

export default Link