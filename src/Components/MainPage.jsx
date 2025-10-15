import { useEffect, useState } from 'react';

const MainPage = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth()+1).toString().padStart(2, '0')}/${today.getFullYear()}`;
    setDate(formattedDate);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-cover bg-center w-4/5 h-screen flex flex-col items-center justify-center text-white overflow-hidden z-1 absolute">
      <div>
        <h1 className="text-7xl font-bold font-mono">Library Management System</h1>
      </div>
      <div className="absolute bottom-0 right-0 text-xl">
        <span>{date} {time}</span>
      </div>
    </div>
  );
};

export default MainPage;
