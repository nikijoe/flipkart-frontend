import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css' 
import { Carousel } from 'react-responsive-carousel';

import {getProductPage} from '../../../actions'
import getParams from '../../../utils/getParams'
import Card from '../../../components/UI/Card';

export default function ProductPage(props) {

    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const {page} = product
    useEffect(() => {
        const params = getParams(props.location.search)
        const payload = {
            params
        }
        dispatch(getProductPage(payload))
    }, [props.location.search, dispatch])

    return (
        <div style={{ margin: '0 10px'}}>
            <h3>{page.title}</h3>
                <Carousel
                    renderThumbs={()=>{}}
                >
                    {
                        page.banners && page.banners.map((banner, index)=> 
                            <a key={index} style={{display: 'block'}}
                                href={banner.navigateTo}
                            >
                                <img src={banner.img} alt='test'/>
                            </a>
                        )
                    }
                </Carousel>
                <div style={{display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            margin: '10px 0'
                            }}>
                    {
                        page.products && page.products.map((product, index)=> 
                            <Card key={index} style={{
                                width: '400px',
                                height: '200px',
                                margin: '5px'
                            }}>
                                <img style={{width: '100%', height:'100%'}} src={product.img} alt='' />
                            </Card>
                        )
                    }
                </div>
        </div>
    )
}