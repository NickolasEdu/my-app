import Container from '@mui/material/Container'
import Header from '../Partials/Header'

const Default = ({ children }) => {
    return (
        <>
            <Header />
            <Container sx={{ padding: '15px 0' }}>
                {children}
            </Container>
        </>
    )
}

export default Default