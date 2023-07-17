import React from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Cryptocurrencies from './Components/Cryptocurrencies';
import CryptoDetails from './Components/CryptoDetails'
import News from './Components/News'
import './App.css'

const App = () => {

  return (
    <div className='app'>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path='/' element={<HomePage />}></Route>
              <Route path='/news' element={<News />} />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route path='/crypto/:coinId' element={<CryptoDetails />} />
            </Routes>

          </div>
        </Layout>

      <div className="footer">
        <Typography.Title level={5} style={{ color: "white", textAlign: 'center' }}>
          Cryptoverse <br />
          All rights reserved <br /> Designed By WAQAR ABBAS
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/news'>News</Link>
          <Link to='/cryptocurrencies'>Cryptocurrecies</Link>
        </Space>
      </div>
    </div>
      </div>
  )
}

export default App
