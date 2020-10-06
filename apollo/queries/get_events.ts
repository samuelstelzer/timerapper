import gql from "graphql-tag";

const GET_EVENTS = gql`
query {
  getMyevent {
    titleEvent
    location
    description
    uuidEvent
    invitedUser {
      edges {
        node {
          uuidUser
        }
      }
    }
    timeVotes{
      edges{
        node{
          start
          end
          acceptedUser{
            edges{
              node{ 
                uuidUser
              }
            }
          }
          tentativeUser{
            edges{
              node{ 
                uuidUser
              }
            }
          }
          declinedUser{
            edges{
              node{ 
                uuidUser
              }
            }   
          }
        }
      }
    }
  deadline
  }
}
`;

export default GET_EVENTS;