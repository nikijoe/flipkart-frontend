import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/UI/Card'
import Layout from '../../components/Layout'
import {getOrder} from '../../actions'
import './style.css'

export default function OrderDetailsPage(props) {
    const dispatch = useDispatch()
    const orderDetails = useSelector(state => state.user.orderDetails)

    useEffect(() => {
        const payload = {
            orderId: props.match.params.orderId
        }
        dispatch(getOrder(payload))
    }, [])

    if(!(orderDetails && orderDetails.address))
        return null

    return (
        <Layout>
            <div style={{width: '1160px', margin: '10px auto'}}>
                <Card>
                    <div className="delAdrContainer">
                        <div className="delAdrDetails">
                            <div className="delTitle">Delivery Address</div>
                            <div className="delName">{orderDetails.address.name}</div>
                            <div className="delAddress">{orderDetails.address.address}</div>
                            <div className="delPhoneNumber">
                                {orderDetails.address.mobileNumber}</div>
                        </div>
                        <div className="delMoreActionContainer">
                            <div className="delTitle">More Actions</div>
                            <div className="delName">Download Invoice</div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="">
                        <div>items</div>
                        <div>order status</div>
                        <div>order status</div>
                    </div>
                </Card>
            </div>
        </Layout>
    )
}
