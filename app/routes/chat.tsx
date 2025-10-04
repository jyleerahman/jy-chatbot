'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router';


export default function Chat() {
    const [input, setInput] = useState('');
    const { chatId } = useParams()
    const { messages, sendMessage } = useChat({
        transport: new DefaultChatTransport({
            api: '/ai',
            body: { chatId }
        })
    });
    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <>
            <div className="flex flex-col h-screen">
                {/* header */}
                <div className="bg-[#68699B] w-full h-10 p-2 pl-3 text-[#FFFFFD]">
                    Home | About | Help | Corporate Services
                </div>

                {/* main */}
                <div className="flex flex-1 min-h-0">
                    {/* image */}
                    <div className="w-1/6 mt-20 ml-10 shrink-0">
                        {chatId === "1" ? (
                            <img src="../app/font/andrew.png" />
                        ) : chatId === "2" ? (
                            <img src="../app/font/paris.png" />
                        ) : (
                            <img className="w-70" src="../app/font/david.png" />
                        )}
                    </div>

                    {/* right column */}
                    <div className="flex flex-col w-5/6 px-6">
                        {/* logo */}
                        <div className="flex justify-between pt-6">
                            <div className="text-[#CB0302] text-2xl">
                                <p>
                                    Have a <span className="text-5xl font-bold">Question?</span>
                                </p>
                                <p>
                                    Just type it in and <span className="text-5xl font-bold">Ask!</span>
                                </p>
                            </div>
                            <div className="text-white text-2xl drop-shadow-[0_1px_1.2px_rgba(0,0,0,0.8)] font-extrabold">
                                <p>PERSONAL</p>
                                {chatId === "1" ? (
                                    <p className="text-[#68699B]">Andrew</p>
                                ) : chatId === "2" ? (
                                    <p className="text-[#68699B]">Paris</p>
                                ) : (
                                    <p className="text-[#68699B]">David</p>
                                )}
                                <p>
                                    is <span className="text-yellow-300 underline">here</span>﹗🛎️
                                </p>
                            </div>
                        </div>

                        {/* messages: fills remaining height and scrolls */}
                        <div id="messages" className="flex-1 overflow-y-auto mt-10 w-[80%] space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className="p-3 border bg-white font-mono shadow-md"
                                >
                                    {message.role === "user" ? "User: " : "AI: "}
                                    {message.parts.map((part, i) => {
                                        switch (part.type) {
                                            case "text":
                                                return <div key={`${message.id}-${i}`}>{part.text}</div>;
                                            default:
                                                return null;
                                        }
                                    })}
                                </div>
                            ))}
                            <div id="messages-end" />
                        </div>

                        {/* input: pinned at bottom, never scrolls */}
                        <div className="shrink-0 w-[80%] bg-white mb-5 p-2 border-5 border-[#BF9F39] shadow-inner">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (!input.trim()) return;
                                    sendMessage({ text: input });
                                    setInput("");
                                    // optional: scroll to bottom immediately after send
                                    document.getElementById("messages-end")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                <input
                                    className="w-full p-2 bg-[#FDFDFD] font-mono outline-none"
                                    value={input}
                                    placeholder="Ask!"
                                    onChange={(e) => setInput(e.currentTarget.value)}
                                />
                            </form>
                            <div ref={bottomRef} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

//     return (
//         <>
//             <div className='flex flex-col h-screen'>
//                 {/* header */}
//                 <div>
//                     <div className="bg-[#68699B] w-full h-10 p-2 pl-3 text-[#FFFFFD]"> Home | About | Help | Corporate Services</div>
//                 </div>


//                 <div className='flex'>
//                     {/* image */}
//                     <div className='w-1/6 mt-20 ml-10'>
//                         {(chatId === "1") ? <img src="../app/font/andrew.png" /> :
//                             (chatId === "2") ? <img src="../app/font/paris.png" /> :
//                                 <img className='w-70' src="../app/font/david.png" />}
//                     </div>

//                     {/* logo */}
//                     <div className='flex flex-col w-5/6 m-15 '>
//                         <div className='flex justify-between'>
//                             <div className="text-[#CB0302] text-2xl"><p>Have a <span className='text-5xl text-bold'>Question?</span></p>
//                                 <p> Just type it in and <span className='text-5xl text-bold'>Ask!</span></p></div>
//                             <div className='text-white text-2xl drop-shadow-[0_1px_1.2px_rgba(0,0,0,0.8)] font-extrabold'>
//                                 <p>PERSONAL</p>
//                                 {(chatId === "1") ? <p className='text-[#68699B]'>Andrew</p> :
//                                     (chatId === "2") ? <p className='text-[#68699B]'>Paris</p> :
//                                         <p className='text-[#68699B]'>David</p>}
//                                 <p>is <span className='text-yellow-300 underline'>here</span>﹗🛎️</p>
//                             </div>
//                         </div>


//                         {/* message */}
//                         <div className='mt-10 w-[80%]'>
//                             {messages.map(message => (
//                                 <div key={message.id} className="flex-1 overflow-y-auto p-4 border mt-4 p-2 bg-white font-mono shadow-md">
//                                     {message.role === 'user' ? 'User: ' : 'AI: '}
//                                     {message.parts.map((part, i) => {
//                                         switch (part.type) {
//                                             case 'text':
//                                                 return <div key={`${message.id}-${i}`}>{part.text}</div>;
//                                         }
//                                     })}
//                                 </div>
//                             ))}
//                         </div>

//                         {/* input */}
//                         <div className=' left-0 p-4 '>
//                             <form
//                                 onSubmit={e => {
//                                     e.preventDefault();
//                                     sendMessage({ text: input });
//                                     setInput('');
//                                 }}
//                             >
//                                 <input
//                                     className="mt-auto bottom-0 w-[80%] p-2 bg-white border-4 border-[#BF9F39] shadow-inner bg-[#FDFDFD] font-mono"
//                                     value={input}
//                                     placeholder="Ask!"
//                                     onChange={e => setInput(e.currentTarget.value)}

//                                 />
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>);
// }