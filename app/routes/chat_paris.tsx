'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState } from 'react';

export default function Chat() {
    const [input, setInput] = useState('');
    const { messages, sendMessage } = useChat({
        transport: new DefaultChatTransport({
            api: 'ai',
        })
    });

    return (
        <div>
            <div className="bg-[#68699B] w-full h-10 p-2 pl-3 text-[#FFFFFD]"> Home | About | Help | Corporate Services</div>
            <div className='flex'>
                <img className='w-70 m-10 mr-0' src="../app/font/Ask_fractal.png" />

                <div className="flex flex-col w-full h-30 mx-auto p-10 pt-5">
                    <div className="text-[#CB0302] text-2xl"><p>Have a <span className='text-5xl text-bold'>Question?</span></p>
                        <p> Just type it in and <span className='text-5xl text-bold'>Ask!</span></p></div>
                    {messages.map(message => (
                        <div key={message.id} className="whitespace-pre-wrap border mt-4 p-2 bg-white font-mono shadow-md">
                            {message.role === 'user' ? 'User: ' : 'AI: '}
                            {message.parts.map((part, i) => {
                                switch (part.type) {
                                    case 'text':
                                        return <div key={`${message.id}-${i}`}>{part.text}</div>;
                                }
                            })}
                        </div>
                    ))}

                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            sendMessage({ text: input });
                            setInput('');
                        }}
                    >
                        <input
                            className="fixed bottom-0 w-224 p-2 mb-8 bg-white border-t border-l border-gray-200 border-b-4 border-r-4 border-gray-500 shadow-inner bg-[#FDFDFD] font-mono"
                            value={input}
                            placeholder="Ask!"
                            onChange={e => setInput(e.currentTarget.value)}

                        />
                    </form>

                </div>
                <div className='text-white mr-10 mt-4 text-2xl drop-shadow-[0_1px_1.2px_rgba(0,0,0,0.8)] font-extrabold'>
                    <p>PERSONAL</p>
                    <p className='text-[#68699B]'>Paris</p>
                    <p>is <span className='text-yellow-300 underline'>here</span>﹗🛎️</p>
                </div>
            </div>
        </div>
    );
}