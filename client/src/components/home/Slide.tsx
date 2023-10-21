import { Link } from 'react-router-dom';

//Material UI
import { Box, Typography, styled,Divider } from '@mui/material';

//Carousel
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { iProduct } from '../../models/models';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },  
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

//CSS
const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
`
const Deal = styled(Box)`
    padding: 15px 20px;
    // display: flex;
    align-content: center;
`

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    margin-right: 25px;
    line-height: 32px;
    text-align:center;
`
const Image = styled('img')({
    width: 'auto',
    height: 150
})
const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;

`

interface slideProps{
    title:string,
    products: iProduct[];
}
const Slide = (props:slideProps)  => {
    return (
        <Component>
            <Deal>
                <DealText>{props.title}</DealText>
            </Deal>
            <Divider />
            <Carousel responsive={responsive} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px" containerClass="carousel-container" swipeable={false} draggable={false} infinite={true} autoPlay={true} centerMode={true} keyBoardControl={true}
                autoPlaySpeed={2500}>
                {
                    props.products.map(product => (
                        <Link to={`product/${product.id}`} style={{textDecoration: 'none'}} key={product._id}>
                            <Box textAlign="center" style={{ padding: '25px 15px' }}>
                                <Image src={product.url} alt="product-img" />
                                <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
                                <Text style={{ color: 'green' }}>{product.discount}</Text>
                                <Text style={{ color: '#212121', opacity: '0.6' }}>{product.tagline}</Text>
                            </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Component>
    )
}

export default Slide;
