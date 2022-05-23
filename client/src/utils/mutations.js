import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutations login(email: $email, password: $password) {
    login(email: $email, password: $password) {
        token 
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
    mutation addUser($username: $username, email $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
`;
