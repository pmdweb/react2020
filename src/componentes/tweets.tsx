import { useState } from "react";

type TweetProps = {
    text: string;
    teste?: string;
}

export function Tweet(props: TweetProps) {
    return (
        <p>{props.text}</p>
    );
}