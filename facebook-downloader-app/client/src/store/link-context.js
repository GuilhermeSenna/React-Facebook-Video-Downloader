import React, { useState, useEffect } from 'react';

// // Initial Context
const LinkContext = React.createContext({
    link: '',
    isTyping: false,
    onStartTyping: () => { },
    onStopTyping: () => { },
    onClearInput: () => { }
});


export const LinkContextProvider = props => {

    const [link, setLink] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const onStartTyping = link => {
        setLink(link)
        setIsTyping(true);
    }

    const onStopTyping = () => {
        setIsTyping(false);
    }

    const onClearInput = () => {
        setLink('')
    }

    return <LinkContext.Provider value={{
        link: link,
        isTyping: isTyping,
        onStartTyping: onStartTyping,
        onStopTyping: onStopTyping,
        onClearInput: onClearInput
    }}
    >{props.children}</LinkContext.Provider>
}


export default LinkContext;