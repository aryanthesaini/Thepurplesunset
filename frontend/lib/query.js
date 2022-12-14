export const PRODUCT_QUERY = `
# Write your query or mutation here
query{
  products{
    data{
      attributes{
        title
        description
        price
        slug
        tag
        image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}`;

export const GET_PRODUCT_QUERY = `
query getProduct($slug: String!){
  products(filters: {slug:{eq: $slug}}){
    data{
      attributes{
        title,
        slug,
        description,
        price,
        image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}
`;
