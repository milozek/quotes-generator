"use client"
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
