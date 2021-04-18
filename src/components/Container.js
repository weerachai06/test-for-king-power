import React from 'react'

export default function Container({ children }) {
    const containerStyle = {
        container: {
            width: '80%',
            margin: 'auto',
        }
    }
    return (
        <div style={containerStyle.container}>
            {children}
        </div>
    )
}
