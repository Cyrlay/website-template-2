import React, {useState} from 'react';
import './Faq.css'
import {Collapse} from "@mui/material";

const Faq = () => {

    const [openQuestionOne, setOpenQuestionOne] = useState(false);
    const [openQuestionTwo, setOpenQuestionTwo] = useState(false);
    const [openQuestionThree, setOpenQuestionThree] = useState(false);

    return (
        <div className={'faq'}>
            <h1>FAQ:</h1>
            <div className={'card mt-3'}>
                <div className={'btn btn-secondary'}
                     onClick={() => setOpenQuestionOne(!openQuestionOne)}
                     aria-controls="example-collapse-text"
                     aria-expanded={openQuestionOne}
                >
                    Question #1
                </div>
                <Collapse in={openQuestionOne}>
                    <div id="example-collapse-text mt-1 me-1">
                        Aliquam id iaculis ante, et consectetur nunc. Nulla facilisi. Phasellus laoreet nibh metus, vel
                        vulputate nisi tempor sit amet. Ut non venenatis lorem.
                    </div>
                </Collapse>

                <div className={'btn btn-secondary'}
                     onClick={() => setOpenQuestionTwo(!openQuestionTwo)}
                     aria-controls="example-collapse-text"
                     aria-expanded={openQuestionTwo}
                >
                    Question #2
                </div>
                <Collapse in={openQuestionTwo}>
                    <div id="example-collapse-text mt-1 me-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula urna blandit pretium
                        rutrum. Fusce ultricies dignissim neque, eget dapibus sapien dictum consectetur.
                    </div>
                </Collapse>

                <div className={'btn btn-secondary'}
                     onClick={() => setOpenQuestionThree(!openQuestionThree)}
                     aria-controls="example-collapse-text"
                     aria-expanded={openQuestionThree}
                >
                    Question #3
                </div>
                <Collapse in={openQuestionThree}>
                    <div id="example-collapse-text mt-1 me-1">
                        Fusce luctus odio in ultricies viverra. Praesent sed aliquam velit, sit amet dignissim enim.
                        Vestibulum euismod imperdiet nisi id congue. Maecenas elementum libero vel est bibendum
                        fringilla. Donec sagittis, metus vitae feugiat vulputate, sem nulla iaculis eros, eu ultrices
                        nibh metus eget sapien.
                    </div>
                </Collapse>
            </div>
        </div>
    );
};

export default Faq;