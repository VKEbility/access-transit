import { Container, Text } from '@mantine/core';

export default function Header() {
  return (
    <header
      style={{
        textAlign: 'center', // Center the text
        fontSize: '1.5rem', // Increase the font size
      }}
    >Welcome to #AccessTransit</header>
    // <Container
    //   sx={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '100px',
    //     padding: '20px',
    //     marginBottom: '50px'
    //   }}
    // >
    //   <Text
    //     id="site-title-logged-in"
    //     align="center"
    //     size="3rem"
    //     weight={900}
    //     padding='40px'
    //     style={{ size: '1rem', textTransform: 'uppercase', marginBottom: '10px' }}
    //   >
    //     Welcome to #AccessTransit
    //   </Text>
    // </Container>
  );
}
