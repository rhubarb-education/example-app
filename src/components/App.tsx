import { Module } from 'conker-framework';
import 'conker-framework/dist/conker-framework.cjs.development.css';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import EndSlide from './units/EndSlide';
import StartSlide from './units/StartSlide';

export type ModuleData = {};

function App() {
    const name = 'Example App';

    const defaultHeader = <h1>Example Learning Module</h1>;
    const defaultFooter = <h1>Default Footer</h1>;

    const slides: any[] = [StartSlide, EndSlide];

    const onNextSlide = (index: number) => {
        console.debug('Next slide: ', index);
    };

    const onComplete = () => {
        alert('Course complete.');
    };

    return (
        <>
            <GlobalStyle />
            <Module
                name={name}
                slides={slides}
                onNextSlide={onNextSlide}
                onComplete={onComplete}
                data={{} as ModuleData}
                defaultHeader={defaultHeader}
                defaultFooter={defaultFooter}
            />
        </>
    );
}

const GlobalStyle = createGlobalStyle<{ theme: any }>`
    #root, body, html {
        font-size: 16px !important;
    }

    body {
        font-size: 1.125rem;
        margin: 0;
        font-family: "Century Gothic", "Arial", -apple-system, BlinkMacSystemFont, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        color: #000000;
    }

    .app-wrapper {
        background-color: #ffffff;
    }
`;

export default App;
