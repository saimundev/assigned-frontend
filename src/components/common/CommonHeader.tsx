type CommonHeaderProps = {
  title: string;
  description?: string;
};
const CommonHeader = ({ title, description }: CommonHeaderProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 font-title">{title}</h1>
      <p className="text-gray-600 font-subtitle">{description}</p>
    </div>
  );
};

export default CommonHeader;
