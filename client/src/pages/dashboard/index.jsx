import React from 'react'

const Dashboard = () => {
  return (
    <div className='mern-dashboard'>
      <div className='mern-dashboard-container'>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard!</p>
        <p>This is a protected route.</p>
        <p>You can access this page only if you are logged in.</p>
        </div>
    </div>
  )
}

export default Dashboard