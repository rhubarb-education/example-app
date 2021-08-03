import { Conker } from 'conker-client';
import React from 'react';

const ProgressButton = () => {
    const reportProgress = () => {
        Conker.report(
            Conker.generateAnonymousAgentObject("https://example.com"), 
            Conker.verbs.PROGRESSED, 
            Conker.generateCourseObject('https://example.com/course-1', 'Course 1', 'An example course.'),
        );
    }

    return (
       
        <div>
            <p>This button should report progress:</p>
            <button onClick={reportProgress}>Report Progress</button>
        </div>
    );
}

export default ProgressButton;
