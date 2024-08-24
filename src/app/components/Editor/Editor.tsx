'use client';

import React, { useState, useEffect } from 'react';
import { post } from '@/utils/request';
import { LanguageMap } from '@/types/api';

export default function Editor() {
  const [text, setText] = useState('');
  const [userIn, setUserIn] = useState(true);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserIn(true);
    setText(event.target.value);
  };

  useEffect(() => {
    const fetchCorrectedText = async () => {
      if (!userIn) return;
      try {
        const response = await post(
          "https://api-f1db6c.stack.tryrelevance.com/latest/studios/1c7d3891-316e-4874-9d12-f1eba4d37c42/trigger_limited",
          {params: {text: text}, project: "7972bbd8bd10-4a43-a5e8-2213d9684084"}
        );

        if (response) {
          setText(response.output[LanguageMap[response.output.random_int_transformed]]);
          setUserIn(false);
        }
      } catch (error) {
        console.error('Error fetching autocorrected text:', error);
      }
    };

    if (text) {
      const delayDebounceFn = setTimeout(() => {
        fetchCorrectedText();
      }, 500);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [text]);

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Start typing..."
        className="w-full h-full p-6 border border-gray-300 rounded-md resize-none overflow-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
        }}
      />
    </div>
  );
};
