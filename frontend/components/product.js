function Product({ product }) {
  //extract the info from props

  const { title, price, image } = product.attributes;
  return (
    <div>
      <div>
        <img src={image.data.attributes.formats.small.url} alt='' />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </div>
  );
}

export default Product;
