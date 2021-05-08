import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


function landingPage(){
    const classes = useStyles();
    return(
        <div>
            <header className="navbar navbar-expand-md bd-navbar">
                Put Icon Here
            </header>
            <section className="landing sec-1">
                <Col className="my-md-4" md={12}>
                    <Row>
                        <Col md={2} id="sticky-sidebar">
                            <div class="sticky-top">
                                <Drawer
                                    className={classes.drawer}
                                    variant="permanent"
                                    classes={{
                                    paper: classes.drawerPaper,
                                    }}
                                    anchor="left"
                                >
                                    <div className={classes.toolbar} />
                                    <Divider />
                                    <List>
                                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                        <ListItem button key={text}>
                                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                        <ListItemText primary={text} />
                                        </ListItem>
                                    ))}
                                    </List>
                                    <Divider />
                                    <List>
                                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                        <ListItem button key={text}>
                                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                        <ListItemText primary={text} />
                                        </ListItem>
                                    ))}
                                    </List>
                                </Drawer>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className="bd-intro">
                                <p className="header-title">
                                    Introduction
                                </p>
                                <p className="header-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat malesuada nisi, eu posuere ante aliquam ut. Proin eleifend tortor a semper tempor. Vivamus bibendum laoreet ligula vel pellentesque. Mauris eleifend ligula a eros dapibus, et venenatis dolor egestas. Phasellus molestie non ex non posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus nibh augue,
                                </p>
                            </div>
                            <div className="bd-content">
                                <h3 className="content-title" id="quick-start">
                                    Quick Start
                                </h3>
                                <p className="content-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat malesuada nisi, eu posuere ante aliquam ut. Proin eleifend tortor a semper tempor. Vivamus bibendum laoreet ligula vel pellentesque. Mauris eleifend ligula a eros dapibus, et venenatis dolor egestas. Phasellus molestie non ex non posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus nibh augue,
                                </p>
                                <h3 className="content-title" id="content-1">
                                    Content 1
                                </h3>
                                <p className="content-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat malesuada nisi, eu posuere ante aliquam ut. Proin eleifend tortor a semper tempor. Vivamus bibendum laoreet ligula vel pellentesque. Mauris eleifend ligula a eros dapibus, et venenatis dolor egestas. Phasellus molestie non ex non posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus nibh augue,
                                </p>
                                <h3 className="content-title" id="content-2">
                                    Content 2
                                </h3>
                                <p className="content-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat malesuada nisi, eu posuere ante aliquam ut. Proin eleifend tortor a semper tempor. Vivamus bibendum laoreet ligula vel pellentesque. Mauris eleifend ligula a eros dapibus, et venenatis dolor egestas. Phasellus molestie non ex non posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus nibh augue,
                                </p>
                                <h3 className="content-title" id="content-3">
                                    Content 3
                                </h3>
                                <p className="content-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat malesuada nisi, eu posuere ante aliquam ut. Proin eleifend tortor a semper tempor. Vivamus bibendum laoreet ligula vel pellentesque. Mauris eleifend ligula a eros dapibus, et venenatis dolor egestas. Phasellus molestie non ex non posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus nibh augue,
                                </p>
                            </div>
                        </Col>
                        <Col md={2} id="sticky-sidebar">
                            <div class="sticky-top">
                                <div className="bd-toc text-muted">
                                    <strong className="sidebar-title d-block pb-2 my-2 border-bottom">
                                        On this page
                                    </strong>
                                    <nav class="TableOfContents">
                                        <ul>
                                            <li><a href="#quick-start">Quick start</a></li>
                                            <li><a href="#content-1">Content 1</a></li>
                                            <li><a href="#content-2">Content 2</a></li>
                                            <li><a href="#content-3">Content 3</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </section>

            <section className="footer-section">

                </section>
        </div>
    )
}

export default landingPage;