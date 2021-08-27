import React from 'react'
import { HeroBox } from './styles'
import banner from "../../assets/images/banner.svg";

export default function Index() {
    return (
        <HeroBox>
                <div>
                    <h1>Make live interations</h1>
                    <p>Easy. Simple. Awesome.</p>
                </div>
                <img src={banner} alt="Banner" />

                <span>&copy; Copyright 2021</span>
        </HeroBox>
    )
}
