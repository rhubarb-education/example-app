import { reportAction } from 'analytics-js';
import React from 'react';



const SoundButton = () => {
    const reportProgress = () => {
        reportAction(process.env.REACT_APP_CONKER_COURSE_ID ?? '', 'COMPLETE_MODULE', {});
    }

    return (
       
        <div>
            <p>This button should report progress:</p>
            <button onClick={reportProgress}>Report Progress</button>
        </div>
    );
}

export default SoundButton;
