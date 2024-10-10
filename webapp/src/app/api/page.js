"use client";
import { useState } from 'react';

export default function Page() {

const [mediaItem, setMediaItem] = useState(null);
const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5';

async function fetchMedia() {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMediaItem(data);
}

const MediaOutput = () => {
        if (mediaItem) {
                
                let mediaList = [];

                mediaItem.forEach((mediaItem, index) => {
                        mediaList.push (
                        <li key={index}>
                                <h2 src={mediaItem.name}></h2>
                                <img src={mediaItem.url} alt={mediaItem.explanation} />
                                <p>{mediaItem.explanation}</p>
                        </li>
                        )
                })

                return (
                        <div className="p-4 mb-4 border-4 border-black text-center">🌭🌭🌭 Our Media Should be here! 🌭🌭🌭
                                <ul>{mediaList}</ul>
                        </div>
                )
        }
                return (
                        <div className="p-4 mb-4 border-4 border-black text-center">🌭🌭🌭 No Media Yet! 🌭🌭🌭</div>
                )
}

        return (
          <div className="p-4 bg-yellow-300">
                <header className="p-4 mb-4 border-4 border-black text-center">
                        <h1 className="text-4xl mb-4">Welcome to My Media Page!</h1>
                        <button 
                                className="text-yellow-200 bg-black p-4" 
                                onClick={fetchMedia}
                        >🌭 Fetch Media!</button>
                </header>
                <MediaOutput />
          </div>
        );
}
      