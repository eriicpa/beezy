import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#f9b55b', '#c6663c'],
})`
  flex: 1;
`;