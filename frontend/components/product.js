import { ProductStyle } from '../styles/ProductStyle';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { v4 as uuid } from 'uuid';
import { useStateContext } from '../lib/context';

function Product({ product }) {
  // console.log(product);
  const { tags, setTags } = useStateContext();

  //extract the info from props

  const { title, price, image, slug, tag } = product.attributes;
  // console.log(image);
  const unique_id = uuid();
  return (
    tag.includes(tags, 0) && (
      <ProductStyle
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.7 }}
        transition={{ delay: '0.1' }}
        exit={{ opacity: 0 }}>
        <Link href={`/product/${slug}`}>
          <div>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
              {image.data.map((img) => (
                <div key={uuid()}>
                  <img src={img.attributes.formats.small.url} alt='' />
                </div>
              ))}
            </Carousel>
          </div>
        </Link>
        <h2>{title}</h2>
        <h3>₹ {price}</h3>
      </ProductStyle>
    )
  );
}

export default Product;
