import React from 'react'

export default function Camel2Title({ string = '' }) {
    return (
        <>
            {string
                // inject space before the upper case letters
                .replace(/([A-Z])/g, function (match) {
                    return " " + match;
                })
                // replace first char with upper case
                .replace(/^./, function (match) {
                    return match.toUpperCase();
                })}
        </>
    )
}
