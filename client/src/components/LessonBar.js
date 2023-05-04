import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import ListGroup from 'react-bootstrap/ListGroup';

const LessonBar = observer(() => {
    const { announcement } = useContext(Context);

    function selectOnLesson(el) {
        if (el.id === announcement.selectedLesson.id) {
            announcement.setSelectedLesson({})
        } else announcement.setSelectedLesson(el)
    }

    return (
        <ListGroup>
            {announcement.lessons.map((el) =>
                <ListGroup.Item key={el.id}
                    style={{ cursor: 'pointer' }}
                    active={el.id === announcement.selectedLesson.id}
                    onClick={() => selectOnLesson(el)}

                >
                    {el.name}
                </ListGroup.Item>
            )}


        </ListGroup>

    )
});

export default LessonBar;