import React from 'react';
import ChatMenu from './chatmenu';
import ChatRoom from './chatroom';

var ChatApp = React.createClass({
    render: function() {
        return <div>
            <ChatMenu />
            <ChatRoom />
        </div>
    }
})

module.exports = ChatApp;