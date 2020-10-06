import gql from 'graphql-tag';

const USER_CREATE_EVENT = gql`
mutation userCreateEvent(
    $token: String!,
    $maxParticipants: Int,
    $isVote: String,
    $deadline: String,
    $description: String,
    $endTime: String,
    $location: String,
    $startTime: DateTime,
    $title: String!,
    $timings: String
    ) {
    userCreateEvent(
        eventData:{
            description: $description,
            maxParticipants: $maxParticipants,
            isVote:  $isVote,
            deadline: $deadline,
            endTime: $endTime,
            location: $location,
            startTime: $startTime,
            title: $title,
            timings: $timings
        },
        token: $token
    ) {
        eventid
    }
}
`;

export default USER_CREATE_EVENT;