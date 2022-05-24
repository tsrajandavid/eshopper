import React, { useEffect, useState } from 'react'
import Categories from '../../layout/products/Categories'
import { connect } from 'react-redux';
import Loader from '../../layout/Loader'
import NavBar from '../../layout/NavBar'
import PageHeader from '../../layout/PageHeader'
import { getProductsByIdFunc, getBulkProductsFunc } from '../../../redux/actionCreators/actions';
import ListedProducts from '../../layout/products/ListedProducts';
import { categories } from '../../api/services/Categories';
function Home(props: any) {
    const [getAllProducts, setGetAllProducts] = useState<any>([])
    const [viewAllCategories, setViewAllCategories] = useState<any>([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        getAllCategories()
        let productsLists = props.state.products
        if (!productsLists.byBulk.data) {
            props.getPostBulk()
        }

    }, [])

    useEffect(() => {
        //console.log(props.state)
        let productsLists = props.state.products
        setGetAllProducts(productsLists.byBulk)
        setIsLoading(productsLists.byBulk.isLoading)
        console.log(productsLists.byBulk.data)

    }, [props.state])
    const getAllCategories = () => {
        setViewAllCategories(categories)
    }
    return (
        <>
            {
                isLoading ? <Loader /> : null
            }
            {/* */}
            {
                viewAllCategories
            }


            <PageHeader />

            {
                getAllProducts.data ? <ListedProducts getAllProducts={getAllProducts.data} /> : null
            }


        </>


    )
}

const mapStateToProps = (state: any) => {
    return {
        state
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPostById: getProductsByIdFunc(dispatch),
        getPostBulk: getBulkProductsFunc(dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);