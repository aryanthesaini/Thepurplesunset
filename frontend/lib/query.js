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
