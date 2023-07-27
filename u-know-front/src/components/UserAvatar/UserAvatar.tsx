
interface AvatarProps {
    username: string;
    imageUrl: string;
  }
  const Avatar: React.FC<AvatarProps> = ({ username, imageUrl }) => {
    return (
      <div>
        <img src={imageUrl} />
        <p>{username}</p>
      </div>
    );
  };
  export default Avatar;