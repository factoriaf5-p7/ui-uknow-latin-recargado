import React from 'react';

interface UserAvatarProps {
    avatarUrl: string;
    username: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ avatarUrl, username }) => {
    return (
        <div className="user-avatar">
            <img src={avatarUrl} alt={`${username}'s Avatar`} />
            <p>{username}</p>
        </div>
    );
};

export default UserAvatar;
