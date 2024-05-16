"use client"
import Image from "next/image"
import Link from "next/link"
import { createContext } from "react"

import styled from "styled-components"

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to right, #000046, #1cb5e0);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  height: 100vh;
  width: 100vw;
  @keyframes gradient {
    0% {
      background-position: 17% 50%;
    }
    50% {
      background-position: 83% 50%;
    }
    100% {
      background-position: 17% 50%;
    }
  }
`

export const BgImgLeaf = styled(Image)`
  position: relative;
  z-index: 1;
  margin-left: 30px;
  margin-top: 25px;
`

export const BgImgHerbal = styled(Image)`
  position: fixed;
  z-index: 1;
  right: 25px;
  bottom: 20px;
`

export const FooterCon = styled.div`
  width: 100vw;
  height: 50px;
  text-align: center;
  font-family: "Caveat", monospace;
  font-size: 15px;
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 999999;
`
export const FooterLink = styled(Link)`
  color: white;
`

export const RedSpan = styled.span`
  /* color: red; */
  font-size: x-large;
`

export const QuoteGeneratorCon = styled.div`
  min-height: 350px;
  min-width: 350px;
  height: 70vh;
  width: 70vw;
  border: 2px solid #ffffff22;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;

  background: rgba(90, 245, 212, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`

export const QuoteGeneratorInnerCon = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
`

export const QuoteGeneratorTitle = styled.div`
  font-family: "Permanent Marker", cursive;
  font-size: 50px;
  text-align: center;
  color: white;
  padding: 0px 20px 0px 20px;
  position: relative;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`

export const QuoteGeneratorSubtitle = styled.div`
  font-family: "Caveat", cursive;
  font-size: 25px;
  text-align: center;
  color: white;
  padding: 0px 20px 0px 20px;
  position: relative;
  width: 100%;
  margin-top: 20px;
  /* @media (max-width: 768px) { */
  /* font-size: 25px; */
  /* } */
`

export const GenerateQuoteButton = styled.div`
  height: 75px;
  width: 300px;
  border: 2px solid darkgrey;
  border-radius: 20px;

  position: relative;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  margin: auto;
  /* top: 50px; */
  top: 10vh;

  transform-origin: center;

  @media (max-width: 768px) {
    height: 66px;
    width: 300px;
  }

  background: rgba(0, 0, 70, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur (20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    filter: brightness(3);
    transition: 0.2s all ease-in-out;
    transform: scale(1.1);

    transform-origin: center;
  }
`

export const GenerateQuoteButtonText = styled.div`
  font-family: "Caveat", cursive;
  font-size: 25px;
  text-align: center;
  color: white;
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* @media (max-width: 768px) {
    font-size: 25px;
  } */
`
