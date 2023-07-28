import { FC, ImgHTMLAttributes } from "react";
import "./UserAvatar.css";

interface UserAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src?: string;
  alt?: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ className, src, alt, ...props }) => {
  const handleOnError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";
  };

  return (
    <div>
      {src ? (
        <img
          {...props}
          className={`defaultClass ${className || ""}`}
          src={src}
          alt={alt}
          onError={handleOnError}
        />
      ) : (
        <img
          {...props}
          className={`defaultClass ${className || ""}`}
          src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"
          alt={alt}
        />
      )}
    </div>
  );
};

export default UserAvatar;
