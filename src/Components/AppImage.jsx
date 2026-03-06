import { useState } from "react";
 import placeholder from "../assets/logo.webp"
const AppImage = ({
  src,
  alt = "",
  className = "",
  placeholder = {placeholder},
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      {/* Placeholder */}
      {!loaded && (
        <img
          src={placeholder}
          alt="placeholder"
          className={`  ${className}`}
          {...props}
        />
      )}

      {/* Real Image */}
      {!error && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={className}
          {...props}
        />
      )}
    </>
  );
};

export default AppImage;
