import './App.css';
import Typography from '@material-ui/core/Typography';
import TabPanel from './Components/TabPanel/TabPanel';
import Box from '@material-ui/core/Box';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <div className="App">
      <Box mx="auto" classes={{ root: "main-app-header-box" }} p={3}>
        <Typography variant="h2" classes={{ root: "main-app-header" }}>
          NS Dashboard
        </Typography>
      </Box>
      <TabPanel />
    </div>
  );
}