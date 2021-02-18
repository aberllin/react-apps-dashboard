import React from 'react'
import styled from 'styled-components'

interface Props {
  searchInput: string
  users: any
  errors: string
}

export const GHUser = ({ errors, users, searchInput }: Props) => {
  const user = users.login

  if (!user) {
    return null
  }

  return (
    <div>
      {user.toLowerCase() === searchInput.toLowerCase() && !errors ? (
        <Wrapper>
          <Row>
            <Image background={users.avatar_url} />
            <Login key={users.id} href={`https://github.com/${searchInput}`}>
              {users.login}
            </Login>
          </Row>
          <Columns>
            <Column>
              <Li>Followers: {users.followers}</Li>
              <Li>Following: {users.following}</Li>
            </Column>
            <Column>
              <Li>Repos: {users.public_repos}</Li>
              <Li>Stars: {users.stargazers_count}</Li>
            </Column>
          </Columns>
        </Wrapper>
      ) : errors ? (
        <ErrorMessage>There is no user with such username</ErrorMessage>
      ) : null}
    </div>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 30px auto;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Image = styled.div<{ background: any }>`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  border: 1px solid #faf4f4;
  width: 150px;
  height: 150px;

  @media screen and (max-width: 992px) {
    width: 130px;
    height: 130px;
  }

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media screen and (max-width: 600px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 400px) {
    width: 80px;
    height: 80px;
  }
`
const Columns = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  text-align: left;

  @media screen and (max-width: 992px) {
    padding: 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px;
  }

  @media screen and (max-width: 600px) {
    padding: 20px;
  }

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: center;
`
const Login = styled.a`
  font-size: 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: ${({ theme }) => theme.textColor};

  @media screen and (max-width: 992px) {
    padding: 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px;
    font-size: 25px;
  }

  @media screen and (max-width: 600px) {
    padding: 20px;
    font-size: 15px;
  }

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`
const Li = styled.li`
  padding: 5px 0;
`
const ErrorMessage = styled.div`
  font-size: 25px;
  color: red;
  width: 100%;
  max-width: 1000px;
  margin: 10px auto;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`
