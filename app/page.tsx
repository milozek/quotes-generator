"use client"

import React, { useState } from "react"

import {
  GradientBackgroundCon,
  BgImgHerbal,
  BgImgLeaf,
  FooterCon,
  FooterLink,
  RedSpan,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorTitle,
  QuoteGeneratorSubtitle,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
} from "@/components/QuoteGenerator/QuoteGeneratorElements"

// Assets

import herbal from "@/assets/herbal.png"
import leaf from "@/assets/leaf.png"

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0)

  return (
    <GradientBackgroundCon>
      <BgImgHerbal src={herbal} height={200} alt="herbal" />

      <BgImgLeaf src={leaf} height={200} alt="leaf" />

      {/* Quote Generator */}

      <QuoteGeneratorCon>
        <QuoteGeneratorInnerCon>
          <QuoteGeneratorTitle>
            Daily Inspirational Quote Generator
          </QuoteGeneratorTitle>
          <QuoteGeneratorSubtitle>
            Looking for a splash of inspiration? Generate a quote card with a
            random inspirational quote provided by{" "}
            <FooterLink
              href="https://zenquotes.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZenQuotes API
            </FooterLink>
            .
          </QuoteGeneratorSubtitle>

          <GenerateQuoteButton>
            <GenerateQuoteButtonText /**onClick={null} */>
              Make a Quote
            </GenerateQuoteButtonText>
          </GenerateQuoteButton>
        </QuoteGeneratorInnerCon>
      </QuoteGeneratorCon>

      <FooterCon>
        <>
          Quotes Generated: {numberOfQuotes}
          <br />
          Developed with <RedSpan>♡</RedSpan> by{" "}
          <FooterLink
            href="https://github.com/milozek?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            @milozek
          </FooterLink>
        </>
      </FooterCon>
    </GradientBackgroundCon>
  )
}
