import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import { getProductsBySlug } from '../../../actions'
import { generatePublicUrl } from '../../../urlConfig'
import Card from '../../../components/UI/Card'
import Price from '../../../components/UI/Price'
import Rating from '../../../components/UI/Rating'

import './style.css'

export default function ProductStore(props) {

    const product = useSelector(state => state.product)
    const priceRange = product.priceRange
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsBySlug(props.match.params.slug))
    }, [dispatch, props.match.params.slug])

    return (
        <>
            {
                Object.keys(product.productsByPrice).map((key, index)=> {
                    return (
                        <Card 
                            headerleft={`${props.match.params.slug} mobile under ${priceRange[key]}`}
                            headerright={<button>view all</button>}
                            style={{width: '98%', margin: '20px'}}
                            key={index}
                        >
                            <div style={{display:'flex'}}>
                                {
                                    product.productsByPrice[key].map((product, index)=> 
                                        <Link to={`/${product.slug}/${product._id}/p`}
                                            style={{display: 'block' }} 
                                            className='productContainer' key={index}>
                                        <div className='productImgContainer'>
                                            <img src={generatePublicUrl(product.productPictures[0].img)} alt='Samsung'></img>
                                        </div>
                                        <div className='productInfo'>
                                            <div style={{ margin: '5px 0'}}>{product.name}</div>
                                            <div>
                                                <Rating value='4.3' />&nbsp;&nbsp;
                                                <span style= {{
                                                    color: '#777',
                                                    fontWeight: '500',
                                                    fontSize: '12px'
                                                }}>3353</span>
                                            </div>
                                            <Price value={product.price} />
                                        </div>
                                    </Link>
                                    )
                                }
                            </div>
                        </Card>
                    )
                })
            }
        </>
    )
}
