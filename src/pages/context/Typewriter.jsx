import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, delay, pause = 1000 }) => {
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [typing, setTyping] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let timeout;

        if (typing) {
            if (charIndex < texts[textIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayText(prev => prev + texts[textIndex][charIndex]);
                    setCharIndex(prev => prev + 1);
                }, delay);
            } else {
                setIsPaused(true);
                timeout = setTimeout(() => setTyping(false), pause);
            }
        } else {
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(prev => prev.slice(0, -1));
                    setCharIndex(prev => prev - 1);
                }, delay / 2);
            } else {
                setIsPaused(true)
                timeout = setTimeout(() => {
                    setTextIndex((prev) => (prev + 1) % texts.length);
                    setTyping(true);
                }, pause)
            }
        }
        return () => clearTimeout(timeout);
    }, [charIndex, typing, textIndex, texts, delay, pause]);

    useEffect(() => {
        if (isPaused) {
            const unpause = setTimeout(() => setIsPaused(false), pause);
            return () => clearTimeout(unpause);
        }
    }, [isPaused, pause]);

    useEffect(() => {
        const cursorBlink = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorBlink);
    }, [])


    return (
        <span style={{ whiteSpace: 'pre' }}>
            {displayText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </span>
    );
};

export default Typewriter;