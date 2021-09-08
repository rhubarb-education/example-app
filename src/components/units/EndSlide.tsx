import { ISlide, Slide } from 'conker-framework';
import { Button } from 'react-bootstrap';

const EndSlide = ({ defaultHeader, onComplete }: ISlide) => {
    const footer = (
        <Button onClick={onComplete} variant="info">
            Finish
        </Button>
    );

    return (
        <Slide header={defaultHeader} footer={footer}>
            <p>End Slide</p>
            {process.env.REACT_APP_DEBUG ? (
                <p>Navigate between slides using your keyboard arrows (debug mode)</p>
            ) : null}
        </Slide>
    );
};

export default EndSlide;
