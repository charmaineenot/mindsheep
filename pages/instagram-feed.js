import React from 'react';
import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css'

export default function InstagramPost() {
    const accessToken = "IGQVJWNURuZA2tZAZATBPU084cWtDZA3liNExWS1ZAhUEZATZAHdNOUkzTWc5dGtCM3ZARcEpYSktSejZAncndaTzI3ZAC1NRXpoUE5GOHlJcDg0SktXZAjU1a2ZAwMDh1dEtGZA0R5SDZAkUmhlUHlsSkJWbVZAXOEdoXwZDZD";
    return (
        <InstagramFeed token={accessToken}  counter="6"/>
    );
}
