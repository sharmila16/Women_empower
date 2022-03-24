import * as React from 'react';
import { TextInput } from 'react-native-paper';

const MyComponent = () => {
  const [fullname, setFullName] = React.useState("");
  const [dateofbirth, setDateofBirth] = React.useState("");
  const [children, setChildren] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [income, setIncome] = React.useState("");
const [taxdeduction, setTaxDeduction] = React.useState("");
  return (
    <TextInput
      label="FullName"
      value={fullname}
      onChangeText={fullname => setFullname(fullname)}
    />
    <TextInput
      label="DateofBirth"
      value={dateofbirth}
      onChangeText={dateofbirth => setDateofBirth(dateofbirth)}
    />
    <TextInput
      label="Children"
      value={children}
      onChangeText={children => setChildren(children)}
    />
    <TextInput
      label="Location"
      value={location}
      onChangeText={location => setLocation(location)}
    />
    <TextInput
      label="Occupation"
      value={occupation}
      onChangeText={occupation => setOccupation(occupation)}
    />
    <TextInput
      label="Income"
      value={income}
      onChangeText={income => setIncome(income)}
    />
     <TextInput
      label="TaxDeduction"
      value={taxdeduction}
      onChangeText={taxdeduction => setTaxDeduction(taxDeduction)}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff1493',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MyComponent;
