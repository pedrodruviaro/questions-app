import React from 'react'
import {Footer} from './styles'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import {Link} from 'react-router-dom'


export default function index() {
    return (
        <Footer>
            <nav>
                <Link to="/about-us" >About us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/report-bug">Report a bug</Link>
            </nav>
            <nav>
                <a target="_blank" rel="noreferrer" href="https://github.com/pedrodruviaro/questions-app">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/pedro-henrique-dalmolin-ruviaro-4b4a00209/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="mailto:pedrodruviaro@gmail.com" target="_blank" rel="noreferrer">
                    <AiOutlineMail />
                </a>
            </nav>
        </Footer>
    )
}
