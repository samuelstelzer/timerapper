import gql from "graphql-tag";

const EVENT = gql`
  query getEvent($eventid: String!) {
    getEvent(idevent: $eventid) {
      description
      isActive
      location
      deadline
      coverName
      timeVotes {
        edges {
          node {
            dateOption
            start
            uuidOption
            end
            acceptedUser {
              edges {
                node {
                  uuidUser
                  userName
                  aliasName
                }
              }
            }
            tentativeUser {
              edges {
                node {
                  uuidUser
                  userName
                  aliasName
                }
              }
            }
            declinedUser {
              edges {
                node {
                  uuidUser
                  userName
                  aliasName
                }
              }
            }
          }
        }
      }
      public
      comments {
        edges {
          node {
            id
            title
            text
            edited
            uuidComment
            upvotes {
              edges {
                node {
                  id
                }
              }
            }
            downvotes {
              edges {
                node {
                  id
                }
              }
            }
            timeCreated
            author {
              id
              userName
              aliasName
              uuidUser
            }
            comments {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
      timeCreated
      titleEvent
      isAdmin {
        edges {
          node {
            uuidUser
          }
        }
      }
      uuidEvent
      isSubEvent
      isVote
      creator {
        aliasName
        userName
        uuidUser
      }
    }
  }
`;

export default EVENT;
