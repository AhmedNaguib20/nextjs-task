import { ReactElement } from "react";

const Loading: React.FC = (): ReactElement => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="spinner border-t-4 border-b-4 border-gray-500 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Loading;