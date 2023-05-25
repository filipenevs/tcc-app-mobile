import React from 'react'
import { Dimensions, Text } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'
import TextButton from '@Components/atomic/TextButton/TextButton'
import { useAppDispatch } from '@Hooks/redux'
import { reset } from '@Store/reducers/auth'
import { deleteSecureStoreValue } from '@Utils/secureStore'

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`

const HeaderContainer = styled.View`
  width: 100%;
  height: ${Dimensions.get('window').height / 3}px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors['primary']['main']};
`

const Avatar = styled.View`
  width: 90px;
  height: 90px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 50px;
  background-color: white;
  margin-bottom: 24px;
`

const BodyContainer = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
`

const AddButton = styled.TouchableOpacity`
  min-height: 20px;
  padding: 8px 8px;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  flex-direction: row;
`

const CardContainer = styled.TouchableOpacity`
  width: 160px;
  height: 160px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  margin: 16px;
`

const StyledText = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-SemiBold';

  color: white;
`
const CardText = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-SemiBold';

  color: black;
`

const AddText = styled.Text`
  font-size: 18px;
  font-family: 'Poppins-SemiBold';

  padding: 8px 8px;
  color: ${({ theme }) => theme.colors['primary']['main']};
`

const Profile: React.FC = () => {
  const theme = useTheme()
  const navigation = useNavigation()
  const dispatch = useAppDispatch()

  function handleOnPressLogoutButton() {
    dispatch(reset())
    deleteSecureStoreValue('secureToken')
  }

  return (
    <Container>
      <HeaderContainer>
        <Avatar />
        <StyledText>{'Nome do Usuário'}</StyledText>
      </HeaderContainer>
      <SafeAreaView>
        <BodyContainer>
          <CardContainer onPress={() => navigation.navigate('AddHouse')}>
            <MaterialIcons name="house" size={32} color="black" />
            <CardText>{'Adicionar residência'}</CardText>
          </CardContainer>
          <CardContainer onPress={() => navigation.navigate('HouseList')}>
            <FontAwesome5 name="list-ol" size={24} color="black" />
            <CardText>{'Minhas residências'}</CardText>
          </CardContainer>
        </BodyContainer>
        <AddButton onPress={handleOnPressLogoutButton}>
          <>
            <MaterialIcons
              name="logout"
              size={20}
              color={theme.colors['primary']['main']}
            />
            <AddText>{'Sair'}</AddText>
          </>
        </AddButton>
      </SafeAreaView>
    </Container>
  )
}

export default Profile
