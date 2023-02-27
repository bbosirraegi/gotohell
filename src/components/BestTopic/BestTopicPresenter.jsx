import React from 'react'
import '../../css/besttopic.css'

const BestTopicPresenter = ( props ) => {

    const { testfunction, testchange } = props;

    return (
        <div>
            {/* UI 구성 */}
            <p>검색 추가</p>
            <p>베스트 게시글 추가</p>
            <div className="test">
                <button onClick={ testfunction } >wow</button>
                <input type="text" name="title" onChange={testchange} />
            </div>
        </div>
    );
}

export default BestTopicPresenter