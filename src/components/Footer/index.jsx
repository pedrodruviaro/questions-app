import React from 'react'
import {Footer} from './styles'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


export default function index() {
    return (
        <Footer>
            <nav>
                <a href="">About us</a>
                <a href="">Contact</a>
                <a href="">Report a bug</a>
            </nav>
            <nav>
                <a href="">
                    <FaGithub />
                </a>
                <a href="">
                    <FaLinkedin />
                </a>
                <a href="">
                    <AiOutlineMail />
                </a>
            </nav>
        </Footer>
    )
}
