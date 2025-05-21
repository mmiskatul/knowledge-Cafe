import PropTypes from 'prop-types';
import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className='px-5 py-4 bg-white mb-5 rounded-xl'>
            <h3 className='font-semibold text-xl text-[#111111]'>{title}</h3>
        </div>
    );
};

Bookmark.prototype={
    bookmark : PropTypes.object
}
export default Bookmark;