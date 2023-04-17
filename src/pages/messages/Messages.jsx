import { useState } from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  
  const [click, setClick] = useState(false);

  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquid nesciunt voluptatibus esse natus alias repudiandae ab minima vel. Eum, rerum voluptas. Alias repudiandae sunt exercitationem a voluptates autem. Architecto.";
  const message1 = message.substring(
    0,
    Math.floor(Math.random() * message.length)
  );
  const message2 = message.substring(
    0,
    Math.floor(Math.random() * message.length)
  );
  const message3 = message.substring(
    0,
    Math.floor(Math.random() * message.length)
  );
  const message4 = message.substring(
    0,
    Math.floor(Math.random() * message.length)
  );
  const message5 = message.substring(
    0,
    Math.floor(Math.random() * message.length)
  );

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className={!click ? "active" : "read"}>
            <td>Charley Sharp</td>
            <td>
              <Link to="/message/123" className="link">
                {message1.length <= 100 ? (
                  <p>{message1}.</p>
                ) : (
                  <p>{message1.substring(0, 100)}...</p>
                )}
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button onClick={() => setClick(true)}>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/123" className="link">
                {message2.length <= 100 ? (
                  <p>{message2}.</p>
                ) : (
                  <p>{message2.substring(0, 100)}...</p>
                )}
              </Link>
            </td>
            <td>2 hours ago</td>
          </tr>
          <tr>
            <td>Elinor Good</td>
            <td>
              <Link to="/message/123" className="link">
                {message3.length <= 100 ? (
                  <p>{message3}.</p>
                ) : (
                  <p>{message3.substring(0, 100)}...</p>
                )}
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Garner David</td>
            <td>
              <Link to="/message/123" className="link">
                {message4.length <= 100 ? (
                  <p>{message4}.</p>
                ) : (
                  <p>{message4.substring(0, 100)}...</p>
                )}
              </Link>
            </td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>Troy Oliver</td>
            <td>
              <Link to="/message/123" className="link">
                {message5.length <= 100 ? (
                  <p>{message5}.</p>
                ) : (
                  <p>{message5.substring(0, 100)}...</p>
                )}
              </Link>
            </td>
            <td>1 week ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
