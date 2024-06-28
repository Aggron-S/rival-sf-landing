const Card = ({ imgUrl, header, description }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-y-2 ">
      <div className="overflow-hidden rounded-sm group">
        <div className="bg-cover bg-center min-w-[407px] min-h-[229px] transition-transform duration-300 transform group-hover:scale-105" style={{ backgroundImage: `url('${imgUrl}')` }}></div>
      </div>
      <h4>{header}</h4>
      <p className="w-[330px]">{description}</p>
    </div>
  );
};

export default Card;

