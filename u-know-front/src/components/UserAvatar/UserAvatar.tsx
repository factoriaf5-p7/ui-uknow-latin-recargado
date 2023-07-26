import React from 'react';

interface UserAvatarProps {
    name: string;
    avatarUrl: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ name/* , avatarUrl */ }) => {
    console.log('User information:', { name, /* avatarUrl  */});
    return (
        <div>
            {/* <img src={avatarUrl} alt="Avatar del Usuario" /> */}
            <h3>{name}</h3>
        </div>
    );
};

export default UserAvatar;
