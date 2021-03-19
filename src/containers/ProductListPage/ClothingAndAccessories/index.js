import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import { getProductsBySlug } from '../../../actions'
import { generatePublicUrl } from '../../../urlConfig'
import Card from '../../../components/UI/Card'
import './style.css'
import { BiRupee } from 'react-icons/bi'

export default function ClothingAndAccessories(props) {

    const product = useSelector(state => state.product)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsBySlug(props.match.params.slug))
    }, [dispatch, props.match.params.slug])

    return (
        <div style={{padding: '10px'}}>
            <Card style={{
                boxSizing: 'border-box',
                padding: '10px',
                display: 'flex'
            }}>
            {
                product.products.map((product, index)=> {
                    return (
                        <div className="caContainer" key={index}>
                            <Link to={`/${product.slug}/${product._id}/p`}
                                className='caImgContainer' >
                                <img src={generatePublicUrl(product.productPictures[0].img)} alt='Samsung'></img>
                            </Link>
                            <div>
                                <div className='caProductName'>{product.name}</div>
                                <div className='caProductPrice'><BiRupee />{product.price}</div>
                            </div>
                        </div>
                    )
                })
            }
            </Card>
        </div>
    )
}

