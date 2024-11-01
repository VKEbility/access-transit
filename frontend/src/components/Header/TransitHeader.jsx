import { Container, Text } from '@mantine/core';

export default function Header() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        padding: '20px',
        marginBottom: '50px'
      }}
    >
      <Text
        id="site-title-logged-in"
        align="center"
        size="3rem"
        weight={900}
        padding='40px'
        style={{ size: '1rem', textTransform: 'uppercase', marginBottom: '10px' }}
      >
        Welcome to #AccessTransit
      </Text>
    </Container>
  );
}
