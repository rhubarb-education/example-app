import { Conker } from 'conker-client';

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
            <p>This button should report progress, if enabled:</p>
            <button onClick={reportProgress}>Report Progress</button>
        </div>
    );
}

export default ProgressButton;
