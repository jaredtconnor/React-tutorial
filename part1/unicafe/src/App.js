import React, { useState } from 'react';
import Button from './components/Button';

// Partials
import Header from './components/Header';
import Content from './components/Content';

// Main app 
const App = () => { 

  const [feedback, setFeedback ] = useState({ 
    goodfeedback: 0, 
    neutralfeedback: 0, 
    badfeedback: 0 
  }); 

  const header_title = "Give Feedback"; 
  const subheader_title = "statistics"; 

  const addGoodFeedback = () => setFeedback({...feedback, goodfeedback: feedback.goodfeedback + 1})
  const addNeutralFeedback = () => setFeedback({...feedback, neutralfeedback: feedback.neutralfeedback + 1})
  const addBadFeedback = () => setFeedback({...feedback, badfeedback: feedback.badfeedback + 1})

  return ( 
    <div> 
      <Header title={header_title} />
      <Button onClick={addGoodFeedback} text="good" />
      <Button onClick={addNeutralFeedback} text="neutral" />
      <Button onClick={addBadFeedback} text="bad" />
      <Header title={subheader_title} />
      <Content ratings={feedback} />
    </div>
  );
}

export default App;