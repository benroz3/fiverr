import { Link } from "react-router-dom";
import "./Message.scss";

const Message = () => {
  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit atque magni ipsa illum ducimus at quod, error porro recusandae repellat. Eveniet quisquam quam eos. Laudantium voluptas enim iusto nobis atque!";

  const randomMessage = (message) => {
    return message.substring(5, Math.floor(Math.random() * (message.length + 5)));
  };

  return (
    <div className="message">
      <div className="container">
        <span className="breadCrumbs">
          <Link className="link" to="/messages">
            Messages
          </Link>{" "}
          / Contact
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>{randomMessage(message)}.</p>
          </div>
          <div className="item owner">
            <img src="/img/ben.jpg" alt="" />
            <p>{randomMessage(message)}.</p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>{randomMessage(message)}.</p>
          </div>
          <div className="item owner">
            <img src="/img/ben.jpg" alt="" />
            <p>{randomMessage(message)}.</p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="Write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
