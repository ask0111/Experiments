import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Dashboard(props) {
    const navigate = useNavigate();

  const HandleClick = () => {
    navigate('/products');
  };

  return (
    <div className="dashboard-ct">
      <h2>Welcome "<b style={{color: '#FF6969'}}>{props.value}</b>" to your Dashboard</h2>
      <button onClick={HandleClick}>Products</button>
    </div>
  );
}

export default Dashboard;
