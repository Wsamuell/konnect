'use client';

import { useMutation, useQuery } from 'convex/react';
import { useState } from 'react';
import { api } from '../../../convex/_generated/api';

interface MessageTerminal {
  sender: string; // sender should technically be the id of the person sending the text
}

const MessageTerminal = ({ sender }: MessageTerminal) => {
  const [message, setMessage] = useState('');

  const createMessage = useMutation(api.messages.sendMessage);
  const messages = useQuery(api.messages.getMessages);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createMessage({ message, sender: sender });
    setMessage('');
  };

  return (
    <div className="flex flex-col space-y-1 p-1 overflow-y-auto">
      <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        {messages?.map((message) => {
          return (
            <div key={message._id} className="chat-message">
              <div
                className={`flex items-end ${
                  message.sender === sender ? 'justify-end' : ''
                }`}
              >
                <div
                  className={`flex flex-col space-y-2 text-md max-w-xs mx-2 order-2 ${
                    message.sender === sender ? 'items-end' : 'items-start'
                  }`}
                >
                  <div>
                    <span
                      className={`px-4 py-2 rounded-lg inline-block rounded-bl-none ${
                        message.sender === sender
                          ? 'bg-gray-300 text-gray-600'
                          : 'bg-blue-600 text-white'
                      } `}
                    >
                      {message.message}
                    </span>
                  </div>
                </div>
                <div
                  className={`flex justify-center items-center text-md rounded-full border-2 w-6 h-6 p-2 ${
                    message.sender === sender
                      ? 'order-1 bg-gray-300 text-gray-600'
                      : 'order-2 bg-blue-600 text-white'
                  }`}
                >
                  {message.sender[0]}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <form
        className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0"
        onSubmit={handleSubmit}
      >
        <div className="relative flex">
          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-3 bg-gray-200 rounded-md py-3"
          />
          <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button
              type="submit"
              disabled={message.length < 1}
              className={`inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white ${
                message.length < 1 ? 'bg-blue-400' : 'bg-blue-600'
              } bg-blue-600 hover:bg-blue-400 focus:outline-none`}
            >
              <span className="font-bold">Send</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 ml-2 transform rotate-90"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageTerminal;
