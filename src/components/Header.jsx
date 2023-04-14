import styled from 'styled-components';

const Container = styled.nav`
background-color: #008080;
width:100%;
border:1px solid;
`
const Image = styled.img`
    /* border-radius:40px; */
    width:100%;
    height:100px;
`

function Header() {
    return ( <Container>
            <Image src="https://yaunghein.github.io/fem-job-listings-with-filtering-react/static/media/bg-header-desktop.8694f466.svg" alt="" />
    </Container> 
    );
}

export default Header;