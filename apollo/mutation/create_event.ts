import gql from 'graphql-tag';

const USER_CREATE_EVENT = gql`
mutation CreateEvent(
            $title: String!,
            $description: String,
            $voting: VotingInput,
            $dates: [DateInput],
            $password: String
        ) 
        {
        createEvent(title:$title, description: $description, dates: $dates, voting: $voting, password: $password) {
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