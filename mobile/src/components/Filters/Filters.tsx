import React, { useState } from 'react';
import { THEME } from '../../styles/theme';
import { TextInput as RNTextInput,
  View, CheckBox as RNCheckBox } from 'react-native';
import { useNavigate, useParams } from 'react-router-dom';


const Filters:React.FC = ({valueParam, handleChangeParam}) => {
  const navigate = useNavigate();

  const [valueInput, setChangeInput] = useState<string>('');
  const [valueCheckBox, setChangeCheckBox] = useState<boolean>(false);

  const handleChangeInput = (value:string) => {
    setChangeInput(value);
  };
  const handeEndEdit = () => {
    console.log('edit');
    navigate('?search='+valueInput+'&status='+valueCheckBox);
    handleChangeParam('?search='+valueInput+'&status='+valueCheckBox);
  };
  const handleChangeCheckBox= async () => {
    setChangeCheckBox((valueCheckBox) => !valueCheckBox);
    navigate('?search='+valueInput+'&status='+!valueCheckBox);
    handleChangeParam('?search='+valueInput+'&status='+!valueCheckBox);
  };

  return (
    <View style={{ flex: 1,
      flexDirection: 'column',
      paddingTop: THEME.Spacings.sp30,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: THEME.Spacings.sp20,
    }}>
      <View style={{
        // flex: 1,
        borderWidth: 1,
        borderRadius: THEME.Size.size5,
        borderColor: THEME.Colors.red1,
        width: '80%',
        height: THEME.Size.size50,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <View style={{ flex: 9,
          marginLeft: THEME.Spacings.sp20,
          paddingVertical: THEME.Spacings.sp10,
        }}>
          <RNTextInput
            value={valueInput}
            placeholder='search todos'
            onChange={(e) => handleChangeInput(e.target.value)}
            onKeyPress={ async (event) => {
              if (event.nativeEvent.key == 'Enter') {
                await handeEndEdit();
              }
            }}
          >
          </RNTextInput>
        </View>
        <View style={{ flex: 1 }}>
          <RNCheckBox
            value={valueCheckBox}
            onChange={() => handleChangeCheckBox()}
          ></RNCheckBox>
        </View>
      </View>
    </View>
  );
};

export default Filters;
