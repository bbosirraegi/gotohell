import React, { useState } from 'react'
import BestTopicPresenter from './BestTopicPresenter'

const BestTopicContainer = () => {

    /* Router */

    /* State */
    const initialState = {
        title: "",
        content: ""
    }

    const [testState, setTestState] = useState(0);
    const [ contentInfo, setContentInfo ] = useState( initialState );

    /* Functions */
    const testfuncion = () => {

        setTestState( testState + 1 );

        console.log( "TESTSTATE : " + testState );
        
        console.log( "ContentInfo : " + contentInfo.title );
    }

    const testchange = e => {

        setContentInfo( { ...contentInfo, [e.target.name] : e.target.value } );
        console.log( "TITLE : " + contentInfo.title );
    }

    /* Hooks */
    
    /* Render */
    
    return (
        <BestTopicPresenter
            testfunction = { testfuncion }
            testchange = { testchange }
        />
    );
}

export default BestTopicContainer