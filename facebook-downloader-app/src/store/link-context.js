import React, { useState, useEffect } from 'react';

// // Initial Context
const LinkContext = React.createContext({
    isTyping: false,
    onStartTyping: () => { },
    onStopTyping: () => { },
});


export const LinkContextProvider = props => {

    const [isTyping, setIsTyping] = useState(false);

    const onStartTyping = () => {
        setIsTyping(true);
    }

    const onStopTyping = () => {
        setIsTyping(false);
    }

    return <LinkContext.Provider value={{
        isTyping: isTyping,
        onStartTyping: onStartTyping,
        onStopTyping: onStopTyping
    }}
    >{props.children}</LinkContext.Provider>
}


export default LinkContext;