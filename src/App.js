import './App.css';
import GraphTV from "./components/GraphTV";
import {Box, Stack} from "@mui/material";


function App() {
  return (
    <div className="App">
        <Stack direction="column" display="flex" height="100%" width="100%">
            <Box height="200px" borderBottom="2px solid gray">
                Инпуты
            </Box>
            <Box flex={80}>
                <Stack direction="row" display="flex" height="100%">
                    <Box flex={80} ml="20px" mt="20px">
                        <GraphTV />
                    </Box>
                    <Box width="300px" borderLeft="2px solid gray">
                        sdfgsdf
                    </Box>
                </Stack>
            </Box>
        </Stack>
    </div>
  );
}

export default App;
