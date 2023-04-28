import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import ListGroup from 'react-bootstrap/ListGroup';

const LessonBar = observer(() => {
    const { announcement } = useContext(Context);

    return (
        <ListGroup>
            {announcement.lessons.map((el) =>
                <ListGroup.Item key={el.id}
                    style={{ cursor: 'pointer' }}
                    active={el.id === announcement.selectedLesson.id}
                    onClick={() => announcement.setSelectedLesson(el)}

                >
                    {el.name}
                </ListGroup.Item>
            )}


        </ListGroup>

    )
});

export default LessonBar;