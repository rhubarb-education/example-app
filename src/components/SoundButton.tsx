import * as H from 'howler';
import React from 'react';

var sound = new H.Howl({
    src: ['/success.mp3'],
});

const SoundButton = () => {
    const playSound = () => {
        console.log('Playing sound...');
        sound.play();
    }

    return (
        <div>
            <p>This button should play a sound:</p>
            <button onClick={playSound}>Play Sound</button>
        </div>
    );
}

export default SoundButton;
