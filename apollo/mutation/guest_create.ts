import gql from 'graphql-tag';

const GUEST_CREATE = gql `
mutation  createGuest($aliasName: String!) {
    createGuest(guestData:{aliasName: $aliasName}) {
                            id
                            secret
                        }
                    }
`;

export default GUEST_CREATE;