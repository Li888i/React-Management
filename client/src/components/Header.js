import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="https://i.ibb.co/s2kxZRs/removebg-preview.png" alt="jinhak" width="120" height="40" />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        &nbsp;&nbsp;샘플 페이지
                    </Typography>
                    <Button color="inherit">리포트툴로 보기</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
};