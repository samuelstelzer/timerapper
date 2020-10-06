import gql from "graphql-tag";

const EVENT_SHORT = gql`
  query getEvent($uuidEvent: String!) {
    getEvent(idevent: $uuidEvent) {
        uuidEvent
        titleEvent
        description
        location
    }
  }
`;

export default EVENT_SHORT;
