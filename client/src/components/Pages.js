import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Pagination } from "react-bootstrap";

const Pages = observer(() => {
    const { announcement } = useContext(Context)
    const pageCount = Math.ceil(announcement.totalCount / announcement.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <>
            {
                announcement.totalCount > 4 ?
                    <Pagination className="mt-3 d-flex justify-content-center align-items-center">
                        {
                            pages.map(page =>
                                <Pagination.Item
                                    key={page}
                                    active={announcement.page === page}
                                    onClick={() => announcement.setPage(page)}
                                >
                                    {page}
                                </Pagination.Item>
                            )
                        }
                    </Pagination >
                    : <span></span>
            }
        </>
    );
});

export default Pages;