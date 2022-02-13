import React from 'react';
import Button from './components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const App = () => {
    return (
        <Container>
            <Button name="Default" />
            <Button name="Default" disabled />
            <Button name="Default" color="primary" />
            <Button name="Default" color="primary" variant="outline" />
            <Button name="Default" color="secondary" />
            <Button name="Default" color="secondary" variant="outline" />
            <Button name="Default" color="danger" />
            <Button name="Default" color="danger" variant="outline" />
            <Button name="Default" color="primary" size="sm" />
            <Button name="Default" color="primary" size="md" />
            <Button
                name="Default"
                color="primary"
                size="lg"
                startIcon={<FontAwesomeIcon icon={faCalendar} />}
            />
            <Button
                name="Default"
                color="primary"
                size="lg"
                endIcon={<FontAwesomeIcon icon={faCalendar} />}
            />
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export default App;
