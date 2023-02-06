import './App.css';
import avatar from './avatar.webp';
import Profile from './profile/Profile';
function App() {

  const alertme = () => {
    alert(props.fullName)
  }
  return (
    <div className="App">
      <Profile 
        fullName='Foulen Fleni' 
        bio ='at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus' 
        profession='web developer' 
        alertme={alertme}>
        <img src={avatar} width= "200px"/>
      </Profile>
    </div>
  );
}

export default App;
