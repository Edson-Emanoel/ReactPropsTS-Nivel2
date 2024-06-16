interface ProductInterface {
  img: string;
  title: string;
  desc: string;
  price: string;
}

const Card = ({img, title, desc, price}:ProductInterface) => {
  return (
    <div className="card w-25 text-dark">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
        </div>
        <div className="card-footer bg-success text-white text-center">
            <span>R$ {price}</span>
        </div>
    </div>  
  )
}

export default Card