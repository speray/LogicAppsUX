import * as React from 'react';

interface SkippedProps {
    isInverted: boolean;
}

export function Skipped({ isInverted }: SkippedProps): JSX.Element {
    const circleFill = isInverted ? '#323130' : '#fff';
    const pathFill = isInverted ? '#A19F9D' : '#605E5C';

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill={circleFill} />
            <path d="M12 0C13.1 0 14.1625 0.141667 15.1875 0.425C16.2125 0.708333 17.1667 1.1125 18.05 1.6375C18.9333 2.1625 19.7417 2.7875 20.475 3.5125C21.2083 4.2375 21.8333 5.04583 22.35 5.9375C22.8667 6.82917 23.2708 7.7875 23.5625 8.8125C23.8542 9.8375 24 10.9 24 12C24 13.1083 23.8583 14.1708 23.575 15.1875C23.2917 16.2042 22.8875 17.1583 22.3625 18.05C21.8375 18.9417 21.2125 19.75 20.4875 20.475C19.7625 21.2 18.9542 21.825 18.0625 22.35C17.1708 22.875 16.2125 23.2792 15.1875 23.5625C14.1625 23.8458 13.1 23.9917 12 24C10.8917 24 9.82917 23.8583 8.8125 23.575C7.79583 23.2917 6.84167 22.8875 5.95 22.3625C5.05833 21.8375 4.25 21.2125 3.525 20.4875C2.8 19.7625 2.175 18.9542 1.65 18.0625C1.125 17.1708 0.720833 16.2125 0.4375 15.1875C0.154167 14.1625 0.00833333 13.1 0 12C0 10.9 0.141667 9.8375 0.425 8.8125C0.708333 7.7875 1.1125 6.83333 1.6375 5.95C2.1625 5.06667 2.7875 4.25833 3.5125 3.525C4.2375 2.79167 5.04583 2.16667 5.9375 1.65C6.82917 1.13333 7.7875 0.729167 8.8125 0.4375C9.8375 0.145833 10.9 0 12 0ZM19.2 12.8V11.2H4.8V12.8H19.2Z" fill={pathFill} />
        </svg>
    );
}
