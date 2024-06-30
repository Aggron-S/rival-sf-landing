const Card = ({ key, imgUrl, header, description }) => {
  return (
    <div key={key} className="flex flex-col justify-center items-center text-center gap-y-2">
      <div className="overflow-hidden rounded-sm group">
        <div className="bg-cover bg-center w-[315px] h-[229px] sm:min-w-[407px] sm:min-h-[229px] transition-transform duration-300 transform group-hover:scale-105" style={{ backgroundImage: `url('${imgUrl}')` }}></div>
      </div>
      <h4>{header}</h4>
      <p className="w-[330px]">{description}</p>
    </div>
  );
};

export default Card;

