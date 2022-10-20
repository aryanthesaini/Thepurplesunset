import { useQuery } from 'urql';
import { GET_PRODUCT_QUERY } from '../../lib/query';
import { useRouter } from 'next/router';
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from '../../styles/ProductDetails';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useStateContext } from '../../lib/context';

export default function ProductDetails() {
  //usestate
  const { qty, increaseQty, decreaseQty, onAdd } = useStateContext();
  // console.log(qty);

  //Fetch slug
  const { query } = useRouter();

  //fetch graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;

  //check for the data coming in

  if (fetching) return <p>LOADING...</p>;
  if (error) <p>OH NO... {error.message}</p>;
  // console.log(data);
  const { title, image, description, price } = data.products.data[0].attributes;
  // console.log(image);
  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.small.url} alt={title} />
      <ProductInfo>
        <h2>{title}</h2>
        <br />
        <h4>₹ {price}</h4>
        <br />
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button>
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </Quantity>{' '}
        <Buy onClick={() => onAdd(data.products.data[0].attributes, qty)}>
          ADD TO CART
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
