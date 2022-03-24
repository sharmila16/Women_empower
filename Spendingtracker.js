import * as React from 'react';
import { TextInput } from 'react-native-paper';

const MyComponent = () => {
  const [salary, setSalary] = React.useState("");
  const [education, setEducation] = React.useState("");
  const [shopping, setShopping] = React.useState("");
  const [kids, setKids] = React.useState("");
  const [travel, setTravel] = React.useState("");
  const [otherexpenses, setOtherExpenses] = React.useState("");
const [amountcanbesaved, setAmountCanBeSaved] = React.useState("");
  return (
    <TextInput
      label="Salary"
      value={salary}
      onChangeText={salary => setSalary(salary)}
    />
    <TextInput
      label="Education"
      value={education}
      onChangeText={education => setEducation(education)}
    />
    <TextInput
      label="Shopping"
      value={shopping}
      onChangeText={shopping => setShopping(shopping)}
    />
    <TextInput
      label="Kids"
      value={kids}
      onChangeText={kids => setKids(kids)}
    />
    <TextInput
      label="Travel"
      value={travel}
      onChangeText={travel => setTravel(travel)}
    />
    <TextInput
      label="OtherExpenses"
      value={otherexpenses}
      onChangeText={otherexpenses => setOtherExpenses(otherexpenses)}
    />
     <TextInput
      label="AmountCanBeSaved"
      value={amountcanbesaved}
      onChangeText={amountcanbesaved => setAmountCanBeSaved(amountcanbesaved)}
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
