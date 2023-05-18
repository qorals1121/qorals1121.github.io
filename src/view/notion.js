import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NotionRenderer } from 'react-notion';

const ReactNotion = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const NOTION_PAGE_ID = 'b71206342e764ace8f145884fdf204c0';
    axios
      .get(`/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, []);

  return (
    <div className="App">
        <NotionRenderer
          // blockMap={staticResponse}
          blockMap={response}
          fullPage={true}
        />
    </div>
  );
};

export default ReactNotion;