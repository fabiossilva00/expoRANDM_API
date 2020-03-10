import gql from 'graphql-tag'

export const allCharactersWithPages = gql`
query getCharacters($page: Int!) {
  characters(page: $page){
    info {
      count
      pages
      next
      prev	
    }
    results {
      id
      name
      status
      species
      gender
      image
      origin {
        id
        name
        dimension
      }
      location {
        id
        name
        dimension
      }
    }
  }
}
`
