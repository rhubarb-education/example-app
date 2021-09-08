import { ISlide, Slide } from 'conker-framework';
import { Button } from 'react-bootstrap';
import ProgressButton from '../general/ProgressButton';
import SoundButton from '../general/SoundButton';

const StartSlide = ({defaultHeader, nextSlide}: ISlide) => {
    const footer = (<Button onClick={() => nextSlide()} variant="info">Next</Button>);
    
    return (
        <Slide header={defaultHeader} footer={footer}>
           <p>Start Slide</p>
           <SoundButton></SoundButton>
           <ProgressButton></ProgressButton>
        </Slide>
    );
}

export default StartSlide;