import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const useStyles = makeStyles({
    container: {
        display: "flex"
    }
});


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
                                <div className={classes.container}>
                                <Drawer />
                                <BrowserRouter>
                                  <Switch>
                                      <Route exact from="/" render={props => <Home {...props} />} />
                                      <Route exact path="/contact" render={props => <Contact {...props} />} />
                                      <Route exact path="/about" render={props => <About {...props} />} />
                                  </Switch>
                                </BrowserRouter>
                                </div>
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