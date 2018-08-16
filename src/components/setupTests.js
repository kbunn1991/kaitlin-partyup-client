import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
// takes the functionality of enzyme & react libraries and puts them together

// configure enzyme
Enzyme.configure({ adapter: new Adapter() });