import React from 'react';
import Button from './Button/index.tsx';
import styled from 'styled-components';

const App = () => {
    return (
        <Container>
            <Button name={'Default'} />
        </Container>
    );
};

const Container = styled.div``;

export default App;
