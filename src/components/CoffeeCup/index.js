import React from 'react';
import ThemeContext from '../../context/ThemeContext';

import { 
    Container,
    Steam1,
    Steam2, 
    Steam3, 
    Steam4,
    Cup,
    CupBody,
    CupShade,
    CupHandle,
    Saucer,
    // Shadow
} from './styles/CoffeeCup'

export default function CoffeeCup() {
    const { theme } = React.useContext(ThemeContext);

    return(<>
    <Container>
        
        <Steam1 className="steam"/>
        <Steam2 className="steam"/>
        <Steam3 className="steam"/>
        <Steam4 className="steam"/>

        <Cup>
        
            <CupBody>
                <CupShade />
            </CupBody>
            
            <CupHandle /> 
            
        </Cup>

        <Saucer theme={theme}/>
        {/* <Shadow /> */}
      
    </Container>
    </>)
}