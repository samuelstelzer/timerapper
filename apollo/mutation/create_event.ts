import gql from 'graphql-tag';

const USER_CREATE_EVENT = gql`
mutation CreateEvent(
            $event: EventInput!,
            $name: String,
            $email: String
        ) 
        {
        newEvent(event: $event, name: $name, email: $email) {
            event {
                title
                timeCreated
                description
                }
            eventId
            }
        }
`;

export default USER_CREATE_EVENT;