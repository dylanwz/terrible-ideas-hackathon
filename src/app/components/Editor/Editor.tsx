'use client';

import React, { useState, useEffect, useRef } from 'react';
import { post } from '@/utils/request';
import { LanguageMap } from '@/types/api';

export default function Editor() {
  const [text, setText] = useState('');
  const [userIn, setUserIn] = useState(false);
  const lastApiCallTime = useRef<number>(0);
  const lastCorrectedText = useRef<string>('');
  const pendingText = useRef<string>('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isCallingApi = useRef<boolean>(false);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserIn(true);
    setText(event.target.value);
  };

  const fetchCorrectedText = async (inputText: string) => {
    if (isCallingApi.current) return;

    const now = Date.now();
    if (inputText.length < 100 || now - lastApiCallTime.current < 10000) {
      return;
    }

    isCallingApi.current = true;
    console.log(`API is being called at ${new Date().toISOString()} with text: "${inputText}"`);

    try {
      const response = await post(
        "https://api-f1db6c.stack.tryrelevance.com/latest/studios/1c7d3891-316e-4874-9d12-f1eba4d37c42/trigger_limited",
        { params: { text: inputText }, project: "7972bbd8bd10-4a43-a5e8-2213d9684084" }
      );

      if (response) {
        const correctedText = response.output[LanguageMap[response.output.random_int_transformed]];
        lastCorrectedText.current += correctedText;
        setText(lastCorrectedText.current);
        setUserIn(false);
        lastApiCallTime.current = now;
        pendingText.current = '';
      }
    } catch (error) {
      console.error('Error fetching autocorrected text:', error);
    } finally {
      isCallingApi.current = false;
    }
  };

  useEffect(() => {
    const handleFetch = () => {
      const now = Date.now();
      const newInputText = text.slice(lastCorrectedText.current.length);

      if (newInputText.length >= 100 && now - lastApiCallTime.current >= 10000) {
        fetchCorrectedText(newInputText);
      } else {
        pendingText.current = newInputText;
      }
    };

    if (userIn) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(handleFetch, 1000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, userIn]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pendingText.current.length >= 100 && !isCallingApi.current) {
        fetchCorrectedText(pendingText.current);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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
}