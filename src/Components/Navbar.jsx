import React, { useEffect, useState } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../Images/cryptocurrency.png';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(false);

    const [screenSize, setScreenSize] = useState(null);

    const handleResize = () => setScreenSize(window.innerWidth);



    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return window.removeEventListener('resize', handleResize);


    }, [window.innerWidth]);

    useEffect(() => {
        if (screenSize < 900) {
            handleResize();

            setActiveMenu(false)
        } else {
            setActiveMenu(false)
            handleResize();

        }
    }, [screenSize])

    return (
        <>
            <div className='nav-container'>
                <div className="logo-container">
                    <div style={{ display: 'flex' }}>
                        <Avatar src={icon} size='large' />
                        <Typography.Title level={2} className='logo'>
                            <Link to='/'>Cryptoverse</Link>
                        </Typography.Title>
                    </div>
                    <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                        <MenuOutlined />
                    </Button>
                    
                    {!activeMenu && (
                        <Menu theme='dark' className='menu-lg'>
                        <Menu.Item icon={<HomeOutlined />}>
                            <Link to='/'>Home</Link>
                        </Menu.Item>
                        <Menu.Item icon={<FundOutlined />}>
                            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                        </Menu.Item>
                        <Menu.Item icon={<BulbOutlined />}>
                            <Link to='/news'>News</Link>
                        </Menu.Item>
                    </Menu>
                    )}
                

                    {activeMenu && (
                        <>
                            <Menu theme='dark' className='sm-meniItem'>
                                <Menu.Item icon={<HomeOutlined />}>
                                    <Link to='/'>Home</Link>
                                </Menu.Item>
                                <Menu.Item icon={<FundOutlined />}>
                                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                                </Menu.Item>
                                <Menu.Item icon={<BulbOutlined />}>
                                    <Link to='/news'>News</Link>
                                </Menu.Item>
                            </Menu></>
                    )}

                </div>
            </div>
        </>
    )
}

export default Navbar
