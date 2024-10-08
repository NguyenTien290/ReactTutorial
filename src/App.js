
import './App.css';
import { useState } from 'react';


function MyButton({ count, onClick }) {

  return (
    <>
      <button onClick={onClick}>Bạn đã nhấn {count} lần </button>
    </>

  )
}

function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <p>Hello there. <br /> How do you do ? </p>
      <button className='button'>Button</button>
    </>

  )
}

const user = {
  name: 'Nguyễn Khắc Tiến',
  imageUrl: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  imageSize: 90,
};


function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      ></img>
    </>
  )
}

let content;
let isLoggedIn = false;



function MyApp() {
  let content;

  if (isLoggedIn) {
    content = <AboutPage />;
  } else {
    content = <Profile />;
  }

  return (
    <div>
      {content}
    </div>
  );

}

const footballers = [
  { title: '7 Chọ', isGoat: false, id: 1 },
  { title: 'Si Lùn', isGoat: true, id: 2 },
  { title: 'A Long', isGoat: false, id: 3 },

]

function WhoIsGoat() {
  const listItems = footballers.map(footballer =>
    <li
      key={footballer.id}
      style={{
        color: footballer.isGoat ? 'magenta' : 'darkgreen'
      }}
    >
      {footballer.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Cập nhật só lần nhấp nút</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  )
}



