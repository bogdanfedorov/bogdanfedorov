import React from "react";

interface DownloadButtonProps {
  fileName: string;
  children: React.ReactNode;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  fileName,
  children,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `https://bogdanfedorov.github.io/bogdanfedorov/${fileName}`;
    link.download = fileName;
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="contact-button-green print:opacity-0"
    >
      {children}
    </button>
  );
};

export default DownloadButton;
