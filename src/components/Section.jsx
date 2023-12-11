import { useState, useEffect } from 'react';

function Section() {

  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();

        if (response.ok) {
          setQuote(`${data.content} - ${data.author}`);
        } else {
          console.error(`Failed to fetch quote: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []);


    return (
       <> <div className="section">
        <div className="card">
            <h3>Quote of the Day</h3>
            <ul id='announcements'>
                <li>{quote}</li>
            </ul>
        </div>

        <div className="card">
            <h3>Archive</h3>
            <ul className="archive">
                <li className="year">
                    <a>2023</a>
                    <ul className="months">
                        <li>January
                            <span className="count">(1)</span>
                        </li>
                        <li>February
                            <span className="count">(4)</span>
                        </li>
                        <li>March
                            <span className="count">(2)</span>
                        </li>
                    </ul>
                </li>
                <li className="year">
                    <a>2022</a>
                    <ul className="months">
                        <li>January
                            <span className="count">(1)</span>
                        </li>
                        <li>February
                            <span className="count">(7)</span>
                        </li>
                        <li>March
                            <span className="count">(9)</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

      

    </div> 
    </>
    )
}

export default Section;