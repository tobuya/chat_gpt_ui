import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './App.css';

function App() {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  return <div></div>;
}

export default App;
