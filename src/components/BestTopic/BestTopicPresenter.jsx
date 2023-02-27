import React from 'react'

const BestTopicPresenter = ( props ) => {

    const { testfunction } = props;

    return (
        <div>
            {/* UI 구성 */}
            <p>검색</p>
            <p>베스트 게시글</p>
            <button onClick={ testfunction } >wow</button>
        </div>
    );
}

export default BestTopicPresenter