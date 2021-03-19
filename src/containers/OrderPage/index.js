import React, {useEffect} from 'react'
import { BiRupee } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import {useDispatch, useSelector} from'react-redux'
import { Link } from 'react-router-dom'
import {getOrders} from '../../actions'
import Layout from '../../components/Layout'
import { Breed } from '../../components/MaterialUI'
import Card from '../../components/UI/Card'
import { generatePublicUrl } from '../../urlConfig'
import './style.css'

export default function OrderPage(props) {
    const user = useSelector(state=> state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrders())
    }, [])
    console.log(user)
    return (
        <Layout>
            <div style={{maxWidth: '1160px', margin: '5px auto'}}>
                <Breed 
                    breed={[
                        {name: "Home", href:'/'},
                        {name: "My Account", href:'/account'},
                        {name: "My Orders", href:'/account/orders'}
                    ]}
                    breedIcon={<IoIosArrowForward />} />
                {
                    user.orders.map((order, index)=>(
                        order.items.map((item, index)=>(
                            <Card style={{display: 'block', margin: '5px 0'}} key={index}>
                                <Link to={`/order_details/${order._id}`} 
                                    className='orderItemContainer'>
                                    <div className='orderImgContainer'>
                                        <img className="orderImg" src={generatePublicUrl(item.productId.productPictures[0].img)} alt="" /></div>
                                    <div className="orderRow">
                                        <div className='orderName'>{item.productId.name}</div>
                                        <div className='orderPrice'><BiRupee /> {item.payablePrice}</div>
                                        <div>{item.purchasedQty}</div>
                                        <div style={{marginLeft:'40px'}}>{order.paymentStatus}</div>
                                    </div>
                                </Link>
                            </Card>
                        ))
                    ))
                }
            </div>
        </Layout>
    )
}

