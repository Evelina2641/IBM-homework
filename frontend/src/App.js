import { useState } from 'react';
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [keywords, setKeywords] = useState('');
  const [data, setData] = useState([]);
  const TOKEN = '89310d38bca3a44d50a4be896cc6a2e2';
  const ENDPOINT = `https://gnews.io/api/v4/search?q=${keywords}&token=${TOKEN}`;
  const [test, setTest] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    let regex = /^[a-z\d\-_\s]+$/i.test(keywords);
    if (regex) {
      setErrorMessage('')
      let response = await fetch(ENDPOINT);
      let data = await response.json();
      let newArray = data.articles.slice(0, 9);
      setData(newArray);
      setTest(true);
      setKeywords('');
    } else if (keywords.length > 40) {
      setErrorMessage('Maximum 40 ...')
    } else {
      setErrorMessage('Queries must contain the following: letters, numbers, white space');
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="logo">NEWS FROM GOOGLE NEWS</div>
        <div className="errorMessage">{errorMessage}</div>
        <InputGroup className="mb-3 mt-3 custom_input">
          <FormControl
            placeholder="Place the keywords.."
            variant="success"
            onChange={(e) => setKeywords(e.target.value)}
            value={keywords}
          />
          <Button
            variant="outline-success"
            id="button-addon2"
            onClick={handleSubmit}
          >
            SEARCH
          </Button>
        </InputGroup>
      </div>
      <div className="articles_container">
        {test &&
          data.map((e, index) => (
            <Card
              style={{ cursor: 'pointer' }}
              key={index}
              className="container_card"
              onClick={() => window.open(e.url, '_blank')}
            >
              <Card.Img variant="top" src={e.image} className="card_image"/>
              <Card.Body>
                <Card.Title className="card_title">{e.title}</Card.Title>
                <Card.Text className="card_description">
                  {e.description.substr(0, 100)}...
                </Card.Text>
                <Card.Text className="card_date">
                {e.publishedAt}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default App;
